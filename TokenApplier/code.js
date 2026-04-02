// ============================================================
// TokenApplier v5 — VMC Subastas
// Vincula Variables de Figma al frame seleccionado
// - colorMap/colorList: solo tokens opacidad total (alpha ≥ 0.99)
// - alphaColorList: tokens con alpha < 0.99 (accentSubtle, navActiveOverlay…)
//   matcheados por RGB + paint.opacity con tolerancia ±0.02
// - Fills con paint.opacity < 1 sin token alpha → se dejan intactos
// - COLOR_ALIASES: fusiones documentadas con ΔE_OK < 2.0 que superan TOL RGB
//   hex origen → nombre exacto de la variable Figma destino
// ============================================================

// Fusiones documentadas (ΔE_OK < 2.0 pero dist Manhattan > TOL)
// Formato: 'R,G,B' normalizado (0-1, 3 decimales) → nombre variable Figma
var COLOR_ALIASES = {
  // #38196c = rgb(56,25,108) → purple-600 (#3b1782). ΔE_OK ≈ 0.03
  // r3(56/255)=0.22, r3(25/255)=0.098, r3(108/255)=0.424
  '0.22,0.098,0.424': 'Primitivos/color/purple-600',
};

async function main() {

  // ── 1. Frame seleccionado ────────────────────────────────
  var selection = figma.currentPage.selection;
  var homepage = null;
  if (selection.length > 0 && (selection[0].type === 'FRAME' || selection[0].type === 'COMPONENT' || selection[0].type === 'GROUP')) {
    homepage = selection[0];
  }
  if (!homepage) {
    figma.notify('❌ Selecciona un frame antes de correr TokenApplier', { timeout: 4000 });
    figma.closePlugin();
    return;
  }

  // ── 2. Leer variables locales ────────────────────────────
  var allVariables = await figma.variables.getLocalVariablesAsync();
  if (allVariables.length === 0) {
    figma.notify('❌ No hay Variables locales. ¿Se importaron con Tokens Studio?', { timeout: 5000 });
    figma.closePlugin();
    return;
  }

  // ── 3. Resolver alias recursivo (hasta 3 niveles) ────────
  async function resolveValue(raw, depth) {
    depth = depth || 0;
    if (depth > 3) return raw;
    if (raw && raw.type === 'VARIABLE_ALIAS') {
      var aliasVar = await figma.variables.getVariableByIdAsync(raw.id);
      if (aliasVar) {
        var modes = Object.keys(aliasVar.valuesByMode);
        if (modes.length > 0) {
          return resolveValue(aliasVar.valuesByMode[modes[0]], depth + 1);
        }
      }
    }
    return raw;
  }

  // ── 4. Clasificar variables ──────────────────────────────
  var colorMap      = {}; // "r,g,b"     → variable  (alpha ≥ 0.99, sem > prim)
  var colorList     = []; // [{r,g,b,variable}]        (sem al frente)
  var alphaColorList = []; // [{r,g,b,a,variable}]      (solo alpha < 0.99)
  var spacingMap    = {};
  var radiusMap     = {};

  var logLines = ['=== Variables cargadas (' + allVariables.length + ') ==='];

  for (var v = 0; v < allVariables.length; v++) {
    var variable = allVariables[v];
    var modeIds  = Object.keys(variable.valuesByMode);
    if (modeIds.length === 0) continue;
    var raw      = variable.valuesByMode[modeIds[0]];
    var resolved = await resolveValue(raw);
    var nameLow  = variable.name.toLowerCase();
    var isSem    = nameLow.indexOf('semanticos/') === 0;

    // ── Colores ──────────────────────────────────────────
    if (variable.resolvedType === 'COLOR' && resolved && resolved.r !== undefined) {
      var alpha = (resolved.a !== undefined) ? resolved.a : 1.0;
      var ck = r3(resolved.r) + ',' + r3(resolved.g) + ',' + r3(resolved.b);
      logLines.push('COLOR ' + (isSem ? '[SEM]' : '[PRI]') + ' ' + variable.name + ' → ' + ck + ' a=' + r3(alpha));

      if (alpha >= 0.99) {
        // Token opacidad total → colorMap / colorList
        if (!colorMap[ck] || isSem) { colorMap[ck] = variable; }
        if (isSem) {
          colorList.unshift({ r: resolved.r, g: resolved.g, b: resolved.b, variable: variable });
        } else {
          colorList.push({ r: resolved.r, g: resolved.g, b: resolved.b, variable: variable });
        }
      } else {
        // Token con alpha → alphaColorList (matchea fills con paint.opacity)
        alphaColorList.push({ r: resolved.r, g: resolved.g, b: resolved.b, a: alpha, variable: variable, isSem: isSem });
        logLines.push('  → ALPHA token, usará alphaColorList');
      }
    }

    // ── Espaciado ─────────────────────────────────────────
    if (variable.resolvedType === 'FLOAT' && typeof resolved === 'number') {
      var isSpacing = nameLow.indexOf('spacing') > -1 ||
                     nameLow.indexOf('padding') > -1 ||
                     nameLow.indexOf('gap') > -1 ||
                     nameLow.indexOf('margin') > -1;
      if (isSpacing) {
        var sk = String(Math.round(resolved * 100) / 100);
        if (!spacingMap[sk] || isSem) spacingMap[sk] = variable;
      }

      var isRadius = nameLow.indexOf('borderradius') > -1 ||
                     nameLow.indexOf('border-radius') > -1 ||
                     nameLow.indexOf('radius') > -1;
      if (isRadius) {
        var rk = String(Math.round(resolved * 100) / 100);
        if (!radiusMap[rk] || isSem) radiusMap[rk] = variable;
      }
    }
  }

  // ── 5. Recorrer nodos y aplicar bindings ─────────────────
  var allNodes = homepage.findAll(function() { return true; });
  allNodes.unshift(homepage);

  var colorCount   = 0;
  var radiusCount  = 0;
  var spacingCount = 0;
  var bindingLog   = ['=== Bindings aplicados ==='];

  for (var n = 0; n < allNodes.length; n++) {
    var node = allNodes[n];

    // — Fills ───────────────────────────────────────────────
    if (node.fills && Array.isArray(node.fills) && node.fills.length > 0) {
      var newFills = [];
      var fillChanged = false;
      for (var fi = 0; fi < node.fills.length; fi++) {
        var fill = node.fills[fi];
        if (fill.type === 'SOLID' && fill.color) {
          var fillOp = (typeof fill.opacity === 'number') ? fill.opacity : 1;
          var hexOrig = toHex(fill.color.r, fill.color.g, fill.color.b);

          if (fillOp < 0.99) {
            // ── Fill con paint.opacity < 1 ─────────────────
            // Busca un token alpha (RGB + opacity) con tolerancia
            var alphVar = findAlphaVariable(fill.color.r, fill.color.g, fill.color.b, fillOp, alphaColorList);
            if (alphVar) {
              // Token alpha encontrado: opacity queda en la variable (alpha channel)
              // → paint.opacity debe ser 1 para no duplicar
              var alphPaint = figma.variables.setBoundVariableForPaint(fill, 'color', alphVar);
              newFills.push(alphPaint); // paint.opacity usa el default (1) del API
              colorCount++;
              fillChanged = true;
              bindingLog.push('FILL_ALPHA [' + node.name + '] ' + hexOrig + ' op=' + r3(fillOp) + ' → ' + alphVar.name);
            } else {
              // Sin token alpha para este fill → dejar INTACTO (no romper la opacidad)
              bindingLog.push('KEEP_OP [' + node.name + '] ' + hexOrig + ' op=' + r3(fillOp) + ' → sin token alpha');
              newFills.push(fill);
            }
          } else {
            // ── Fill opacidad total ────────────────────────
            var fvbl = findColorVariable(fill.color.r, fill.color.g, fill.color.b, colorMap, colorList, allVariables);
            if (fvbl) {
              bindingLog.push('FILL [' + node.name + '] ' + hexOrig + ' → ' + fvbl.name);
              newFills.push(figma.variables.setBoundVariableForPaint(fill, 'color', fvbl));
              colorCount++;
              fillChanged = true;
            } else {
              bindingLog.push('MISS [' + node.name + '] ' + hexOrig + ' → sin match');
              newFills.push(fill);
            }
          }
        } else {
          newFills.push(fill);
        }
      }
      if (fillChanged) {
        try { node.fills = newFills; } catch(e) {}
      }
    }

    // — Strokes ─────────────────────────────────────────────
    if (node.strokes && Array.isArray(node.strokes) && node.strokes.length > 0) {
      var newStrokes = [];
      var strokeChanged = false;
      for (var si = 0; si < node.strokes.length; si++) {
        var stroke = node.strokes[si];
        if (stroke.type === 'SOLID' && stroke.color) {
          var strokeOp = (typeof stroke.opacity === 'number') ? stroke.opacity : 1;
          if (strokeOp < 0.99) {
            var alphStrokVar = findAlphaVariable(stroke.color.r, stroke.color.g, stroke.color.b, strokeOp, alphaColorList);
            if (alphStrokVar) {
              newStrokes.push(figma.variables.setBoundVariableForPaint(stroke, 'color', alphStrokVar));
              colorCount++; strokeChanged = true;
            } else {
              newStrokes.push(stroke);
            }
          } else {
            var svbl = findColorVariable(stroke.color.r, stroke.color.g, stroke.color.b, colorMap, colorList, allVariables);
            if (svbl) {
              newStrokes.push(figma.variables.setBoundVariableForPaint(stroke, 'color', svbl));
              colorCount++; strokeChanged = true;
            } else {
              newStrokes.push(stroke);
            }
          }
        } else {
          newStrokes.push(stroke);
        }
      }
      if (strokeChanged) {
        try { node.strokes = newStrokes; } catch(e) {}
      }
    }

    // — Corner radius (snap al token más cercano si no hay exacto) ────────────
    if (typeof node.cornerRadius === 'number' && node.cornerRadius >= 0) {
      var crkv = String(Math.round(node.cornerRadius * 100) / 100);
      var crVar = radiusMap[crkv] || snapRadius(node.cornerRadius, radiusMap);
      if (crVar) {
        try { node.setBoundVariable('cornerRadius', crVar); radiusCount++; } catch(e) {}
      }
    }

    // — Padding y gap ───────────────────────────────────────
    var spacingProps = ['paddingTop','paddingBottom','paddingLeft','paddingRight','itemSpacing'];
    for (var sp = 0; sp < spacingProps.length; sp++) {
      var sprop = spacingProps[sp];
      if (typeof node[sprop] === 'number' && node[sprop] > 0) {
        var spk = String(Math.round(node[sprop] * 100) / 100);
        if (spacingMap[spk]) {
          try { node.setBoundVariable(sprop, spacingMap[spk]); spacingCount++; } catch(e) {}
        }
      }
    }
  }

  // ── 6. Log en canvas ─────────────────────────────────────
  try {
    await figma.loadFontAsync({ family: 'Plus Jakarta Sans', style: 'Regular' });
    var fullLog = logLines.join('\n') + '\n\n' + bindingLog.join('\n');
    var txt = figma.createText();
    txt.fontName   = { family: 'Plus Jakarta Sans', style: 'Regular' };
    txt.fontSize   = 10;
    txt.characters = fullLog;
    txt.x = homepage.x + homepage.width + 100;
    txt.y = homepage.y;
    figma.currentPage.appendChild(txt);
  } catch(e) {}

  // ── 7. Reporte ───────────────────────────────────────────
  var total = colorCount + radiusCount + spacingCount;
  figma.notify(
    '✅ ' + total + ' bindings' +
    ' | 🎨 ' + colorCount + ' colores' +
    ' | ⭕ ' + radiusCount + ' radios' +
    ' | 📐 ' + spacingCount + ' espaciados' +
    ' | Variables: ' + allVariables.length +
    ' — Lee el log en canvas',
    { timeout: 10000 }
  );
  figma.closePlugin();
}

function r3(n) { return Math.round(n * 1000) / 1000; }

function toHex(r, g, b) {
  function ch(x) { var h = Math.round(x * 255).toString(16); return h.length === 1 ? '0' + h : h; }
  return '#' + ch(r) + ch(g) + ch(b);
}

// Snap corner radius a los niveles canónicos — rangos explícitos (CLAUDE.md)
// ≤1.5→0 | 2–5→4 | 6–10→8 | 11–24→16 | >24→9999
function snapRadius(value, radiusMap) {
  var snapped;
  if      (value <= 1.5) snapped = 0;
  else if (value <= 5)   snapped = 4;
  else if (value <= 10)  snapped = 8;
  else if (value <= 24)  snapped = 16;
  else                   snapped = 9999;
  return radiusMap[String(snapped)] || null;
}

// Busca variable de opacidad total (colorMap exacto, luego tolerancia en colorList)
// TOL=0.015 cubre fusiones documentadas: #391383→purple-600 (dist 0.026), #260060→purple-800 (dist 0.031)
function findColorVariable(r, g, b, colorMap, colorList, allVariables) {
  var exactKey = r3(r) + ',' + r3(g) + ',' + r3(b);
  if (colorMap[exactKey]) return colorMap[exactKey];
  // Alias explícitos (fusiones ΔE_OK < 2.0 documentadas)
  if (COLOR_ALIASES[exactKey] && allVariables) {
    for (var av = 0; av < allVariables.length; av++) {
      if (allVariables[av].name === COLOR_ALIASES[exactKey]) return allVariables[av];
    }
  }
  var TOL = 0.015;
  var best = null, bestDist = TOL * 3;
  for (var i = 0; i < colorList.length; i++) {
    var e = colorList[i];
    var dist = Math.abs(e.r - r) + Math.abs(e.g - g) + Math.abs(e.b - b);
    if (dist < bestDist) { bestDist = dist; best = e.variable; }
  }
  return best;
}

// Busca variable alpha: compara RGB del fill + paint.opacity contra variable.a
// Tolerancia ±0.02 en cada canal RGB y en alpha
function findAlphaVariable(r, g, b, fillOpacity, alphaColorList) {
  var TOL = 0.02;
  var best = null, bestDist = Infinity;
  for (var i = 0; i < alphaColorList.length; i++) {
    var e = alphaColorList[i];
    var dist = Math.abs(e.r - r) + Math.abs(e.g - g) + Math.abs(e.b - b) + Math.abs(e.a - fillOpacity);
    if (dist < TOL * 4 && dist < bestDist) { bestDist = dist; best = e.variable; }
  }
  return best;
}

main().catch(function(err) {
  figma.notify('❌ Error: ' + err.message, { timeout: 5000 });
  console.error(err);
  figma.closePlugin();
});
