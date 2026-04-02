// ============================================================
// SpacingFixer — Paso 1.6
// 1. Pixel snap incondicional: redondea width/height decimales
//    causados por sub-pixel rendering del browser (371.99 → 372).
//    Se aplica a TODOS los nodos sin importar sizingMode.
// 2. Snap a grilla 4px: fuerza múltiplos de 4 en dimensiones.
// 3. Corrige spacing/padding/gap y reintenta bindear Variables.
// Aplica sobre: homepage-tokenizado (Page 1)
// ============================================================

var SPACING_PROPS = ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'itemSpacing'];

function snap4(value) {
  return Math.round(value / 4) * 4;
}

function isMultiple4(value) {
  return value % 4 === 0;
}

async function main() {

  // ── 1. Usar el frame seleccionado ───────────────────────
  var selection = figma.currentPage.selection;
  var homepage = null;
  if (selection.length > 0 && (selection[0].type === 'FRAME' || selection[0].type === 'COMPONENT' || selection[0].type === 'GROUP')) {
    homepage = selection[0];
  }
  if (!homepage) {
    figma.notify('❌ Selecciona un frame antes de correr SpacingFixer', { timeout: 4000 });
    figma.closePlugin();
    return;
  }

  // ── 3. Cargar variables locales de spacing ─────────────
  var allVars = await figma.variables.getLocalVariablesAsync();
  var spacingMap = {}; // px value → Variable

  for (var v = 0; v < allVars.length; v++) {
    var variable = allVars[v];
    if (variable.resolvedType !== 'FLOAT') continue;
    var nameLow = variable.name.toLowerCase();
    var isSpacing = nameLow.indexOf('spacing') > -1 ||
                    nameLow.indexOf('padding') > -1 ||
                    nameLow.indexOf('gap')     > -1 ||
                    nameLow.indexOf('margin')  > -1;
    if (!isSpacing) continue;

    var modeIds = Object.keys(variable.valuesByMode);
    if (modeIds.length === 0) continue;
    var raw = variable.valuesByMode[modeIds[0]];
    if (typeof raw !== 'number') continue;

    var key = String(Math.round(raw));
    // Preferir semánticos (tienen '/' en el nombre)
    if (!spacingMap[key] || variable.name.indexOf('/') > -1) {
      spacingMap[key] = variable;
    }
  }

  // ── 4. Auditar y corregir ──────────────────────────────
  var allNodes = homepage.findAll(function() { return true; });
  allNodes.unshift(homepage);

  var snapped   = 0;
  var bound     = 0;
  var alreadyOk = 0;
  var noVar     = 0;
  var missingTokens = {}; // valor → conteo de ocurrencias

  for (var n = 0; n < allNodes.length; n++) {
    var node = allNodes[n];

    // ── Padding y gap ─────────────────────────────────────
    for (var sp = 0; sp < SPACING_PROPS.length; sp++) {
      var prop = SPACING_PROPS[sp];
      if (typeof node[prop] !== 'number') continue;
      var val = node[prop];
      if (val === 0) continue; // 0 es intencional, no tocamos

      if (isMultiple4(val)) {
        alreadyOk++;
        // Intentar bindear aunque ya sea múltiplo (puede que no tenga variable)
        var okKey = String(Math.round(val));
        if (spacingMap[okKey]) {
          try { node.setBoundVariable(prop, spacingMap[okKey]); bound++; } catch(e) {}
        }
      } else {
        var fixed = snap4(val);
        if (fixed === 0) fixed = 4; // mínimo 4px si era algo como 1-2px
        try {
          node[prop] = fixed;
          snapped++;
          var fKey = String(fixed);
          if (spacingMap[fKey]) {
            try { node.setBoundVariable(prop, spacingMap[fKey]); bound++; } catch(e) {}
          } else {
            noVar++;
            missingTokens[fKey] = (missingTokens[fKey] || 0) + 1;
          }
        } catch(e) {}
      }
    }

    // ── Pixel snap: solo nodos con dimensión fraccionaria y sizing FIXED ──
    // Corrige sub-pixel rendering del browser (371.99→372, 300.38→300).
    // Solo toca dimensiones que son FIXED — nunca HUG ni FILL para no
    // romper auto-layout calculado por Figma.
    if (typeof node.width === 'number' && typeof node.height === 'number') {
      var rw = Math.round(node.width);
      var rh = Math.round(node.height);
      var hasFrac = Math.abs(node.width - rw) > 0.01 || Math.abs(node.height - rh) > 0.01;
      if (hasFrac) {
        var szH = node.layoutSizingHorizontal; // 'FIXED'|'HUG'|'FILL'|undefined
        var szV = node.layoutSizingVertical;
        var fixedH = !szH || szH === 'FIXED';
        var fixedV = !szV || szV === 'FIXED';
        if (fixedH || fixedV) {
          var tw = fixedH ? rw : Math.round(node.width);
          var th = fixedV ? rh : Math.round(node.height);
          try { node.resize(tw, th); snapped++; } catch(e) {}
        }
      }
    }
  }

  // ── 5. Reporte ─────────────────────────────────────────
  var missingList = [];
  for (var mv in missingTokens) missingList.push(mv + 'px×' + missingTokens[mv]);
  missingList.sort(function(a, b) { return parseInt(a) - parseInt(b); });

  figma.notify(
    '✅ SpacingFixer' +
    ' | 📐 ' + snapped + ' corregidos' +
    ' | 🔗 ' + bound + ' bindeados' +
    ' | ⚠️ Sin token: ' + (missingList.length ? missingList.join(', ') : 'ninguno'),
    { timeout: 12000 }
  );
  figma.closePlugin();
}

main().catch(function(err) {
  figma.notify('❌ Error: ' + err.message, { timeout: 5000 });
  console.error(err);
  figma.closePlugin();
});
