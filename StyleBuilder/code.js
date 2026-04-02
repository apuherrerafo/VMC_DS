// ============================================================
// StyleBuilder — Paso 1.5 (v5 — font-name resolver + textCase preserve)
// FIXES:
//   - Figma puede tener "Extra Bold" o "ExtraBold" según la fuente instalada.
//     resolveFont() prueba ambas variantes automáticamente.
//   - setTextStyleIdAsync() aplica textCase='ORIGINAL' del estilo y borra
//     los UPPER/LOWER del nodo. Ahora guardamos y restauramos textCase.
//   - Sin fallback a Regular: si el peso exacto no existe, el nodo queda intacto.
// ============================================================

var FONT_SIZE_SCALE = [8, 10, 11, 12, 14, 16, 18, 20, 24, 27, 30, 38, 56];

// Estilos de texto — Plus Jakarta Sans canónico (solo Roboto + PJS disponibles en Figma)
var TEXT_STYLES = [
  // Display
  { name: 'Display/LG',           family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 56, lh: 84  },
  { name: 'Display/MD',           family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 38, lh: 56  },
  // Heading
  { name: 'Heading/Hero',         family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 30, lh: 44  },
  { name: 'Heading/LG',           family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 27, lh: 40  },
  { name: 'Heading/MD',           family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 24, lh: 36  },
  { name: 'Heading/Section',      family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 20, lh: 32  },
  { name: 'Heading/Section/Bold', family: 'Plus Jakarta Sans', style: 'Bold',      size: 20, lh: 32  },
  { name: 'Heading/Help',         family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 18, lh: 28  },
  { name: 'Heading/Help/Bold',    family: 'Plus Jakarta Sans', style: 'Bold',      size: 18, lh: 28  },
  // Card
  { name: 'Card/Title',           family: 'Plus Jakarta Sans', style: 'Bold',      size: 14, lh: 20  },
  { name: 'Card/Title/SM',        family: 'Plus Jakarta Sans', style: 'Bold',      size: 11, lh: 16  },
  // Body
  { name: 'Body/Regular',         family: 'Plus Jakarta Sans', style: 'Regular',   size: 16, lh: 24  },
  { name: 'Body/SemiBold',        family: 'Plus Jakarta Sans', style: 'SemiBold',  size: 16, lh: 24  },
  { name: 'Body/Bold',            family: 'Plus Jakarta Sans', style: 'Bold',      size: 16, lh: 24  },
  { name: 'Body/SM',              family: 'Plus Jakarta Sans', style: 'Regular',   size: 14, lh: 20  },
  { name: 'Body/SM/SemiBold',     family: 'Plus Jakarta Sans', style: 'SemiBold',  size: 14, lh: 20  },
  { name: 'Body/SM/Bold',         family: 'Plus Jakarta Sans', style: 'Bold',      size: 14, lh: 20  },
  // Label / Caption
  { name: 'Label/SemiBold',       family: 'Plus Jakarta Sans', style: 'SemiBold',  size: 12, lh: 20  },
  { name: 'Label/Regular',        family: 'Plus Jakarta Sans', style: 'Regular',   size: 12, lh: 20  },
  { name: 'Label/Bold',           family: 'Plus Jakarta Sans', style: 'Bold',      size: 12, lh: 20  },
  { name: 'Label/ExtraBold',      family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 12, lh: 20  },
  { name: 'Caption/Regular',      family: 'Plus Jakarta Sans', style: 'Regular',   size: 11, lh: 16  },
  { name: 'Caption/Bold',         family: 'Plus Jakarta Sans', style: 'Bold',      size: 11, lh: 16  },
  // Badge / Nav
  { name: 'Badge/SemiBold',       family: 'Plus Jakarta Sans', style: 'SemiBold',  size: 10, lh: 16  },
  { name: 'Badge/Bold',           family: 'Plus Jakarta Sans', style: 'Bold',      size: 10, lh: 16  },
  { name: 'Badge/ExtraBold',      family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 10, lh: 16  },
  // Micro
  { name: 'Micro/SemiBold',       family: 'Plus Jakarta Sans', style: 'SemiBold',  size: 8,  lh: 12  },
  // Combos adicionales presentes en el frame
  { name: 'Caption/SemiBold',        family: 'Plus Jakarta Sans', style: 'SemiBold',  size: 11, lh: 16  },
  { name: 'Caption/ExtraBold',       family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 11, lh: 16  },
  { name: 'Card/Title/Featured',     family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 14, lh: 20  },
  { name: 'Heading/Hero/Bold',       family: 'Plus Jakarta Sans', style: 'Bold',      size: 30, lh: 44  },
  // Variantes uppercase — para nodos con textCase=UPPER sin token Tokens Studio equivalente
  { name: 'Caption/ExtraBold/UC',    family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 11, lh: 16, tc: 'UPPER' },
  { name: 'Caption/SemiBold/UC',     family: 'Plus Jakarta Sans', style: 'SemiBold',  size: 11, lh: 16, tc: 'UPPER' },
  { name: 'Label/Bold/UC',           family: 'Plus Jakarta Sans', style: 'Bold',      size: 12, lh: 20, tc: 'UPPER' },
  { name: 'Card/Title/Featured/UC',  family: 'Plus Jakarta Sans', style: 'ExtraBold', size: 14, lh: 20, tc: 'UPPER' },
];

// Sombras — blur = 2 × offsetY. Shadow/Brand: Vault Tinted #22005c/6% (DESIGN.md)
var EFFECT_STYLES = [
  { name: 'Shadow/SM',    radius: 4,  offsetY: 2, r: 0,     g: 0,     b: 0,     alpha: 0.06 },
  { name: 'Shadow/MD',    radius: 8,  offsetY: 4, r: 0,     g: 0,     b: 0,     alpha: 0.08 },
  { name: 'Shadow/LG',    radius: 16, offsetY: 8, r: 0,     g: 0,     b: 0,     alpha: 0.10 },
  { name: 'Shadow/Brand', radius: 16, offsetY: 8, r: 0.133, g: 0,     b: 0.361, alpha: 0.06 },
];

// Familias a sustituir → Plus Jakarta Sans
var FONT_REPLACE = {
  'Roboto':       'Plus Jakarta Sans',
  'Inter':        'Plus Jakarta Sans',
  'Buenos Aires': 'Plus Jakarta Sans',
};

// Pesos Roboto/Inter → nombre lógico Plus Jakarta Sans
var STYLE_REPLACE = {
  'Thin':        'ExtraLight',
  'ExtraLight':  'ExtraLight',
  'Light':       'Light',
  'Regular':     'Regular',
  'Medium':      'SemiBold',
  'Semi Bold':   'SemiBold',
  'SemiBold':    'SemiBold',
  'Bold':        'Bold',
  'ExtraBold':   'ExtraBold',
  'Extra Bold':  'ExtraBold',
  'Black':       'ExtraBold',
  'Italic':      'Italic',
  'Bold Italic': 'Bold Italic',
};

// Clave efecto: radio + RGB para distinguir Shadow/LG vs Shadow/Brand (mismo radio)
function makeEffectKey(radius, r, g, b) {
  return radius + '_' + Math.round(r * 255) + '_' + Math.round(g * 255) + '_' + Math.round(b * 255);
}

function snapFontSize(size) {
  var best = FONT_SIZE_SCALE[0], dist = Math.abs(size - best);
  for (var i = 1; i < FONT_SIZE_SCALE.length; i++) {
    var d = Math.abs(size - FONT_SIZE_SCALE[i]);
    if (d < dist) { dist = d; best = FONT_SIZE_SCALE[i]; }
  }
  return best;
}

function findBestTextStyle(styles, family, fstyle, size, lh, nodeTextCase) {
  var r = _match(styles, family, fstyle, Math.round(size), lh, nodeTextCase);
  if (r) return { style: r, snappedSize: null };
  var sn = snapFontSize(size);
  if (sn !== Math.round(size)) { r = _match(styles, family, fstyle, sn, lh, nodeTextCase); if (r) return { style: r, snappedSize: sn }; }
  return null;
}

function _match(styles, family, fstyle, sz, lh, nodeTextCase) {
  var best = null, bestSc = 0;
  for (var i = 0; i < styles.length; i++) {
    var s = styles[i];
    if (s.fontName.family !== family || s.fontName.style !== fstyle || Math.round(s.fontSize) !== sz) continue;
    var sc = 1;
    if (lh && s.lineHeight) {
      var na = lh.unit === 'AUTO', da = s.lineHeight.unit === 'AUTO';
      if      (na && da)   sc += 1;
      else if (!na && !da && Math.round(lh.value) === Math.round(s.lineHeight.value)) sc += 1;
    }
    // Preferir estilos cuyo textCase coincida con el nodo (Tokens Studio uppercase styles)
    if (nodeTextCase && nodeTextCase !== 'ORIGINAL' && s.textCase === nodeTextCase) sc += 4;
    if (sc > bestSc) { bestSc = sc; best = s; }
  }
  return best;
}

async function main() {

  // ── 1. Frame seleccionado ───────────────────────────────
  var sel = figma.currentPage.selection;
  var homepage = (sel.length > 0 &&
    (sel[0].type === 'FRAME' || sel[0].type === 'COMPONENT' || sel[0].type === 'GROUP'))
    ? sel[0] : null;
  if (!homepage) {
    figma.notify('❌ Selecciona un frame antes de correr StyleBuilder', { timeout: 4000 });
    figma.closePlugin(); return;
  }

  // ── 2. Resolver nombres reales de fuentes en Figma ──────
  // Figma puede usar "Extra Bold" o "ExtraBold" según la instalación.
  // resolveFont prueba el nombre tal cual, luego con espacio (CamelCase → "Camel Case").
  var fontCache = {}; // "family|style" → nombre resuelto, o null

  async function resolveFont(family, style) {
    var k = family + '|' + style;
    if (k in fontCache) return fontCache[k];
    // Prueba 1: nombre exacto
    try { await figma.loadFontAsync({ family: family, style: style }); fontCache[k] = style; return style; } catch(e) {}
    // Prueba 2: insertar espacio (ExtraBold → "Extra Bold", SemiBold → "Semi Bold")
    var spaced = style.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (spaced !== style) {
      try { await figma.loadFontAsync({ family: family, style: spaced }); fontCache[k] = spaced; return spaced; } catch(e) {}
    }
    // Prueba 3: quitar espacios ("Semi Bold" → "SemiBold")
    var nospace = style.replace(/\s+/g, '');
    if (nospace !== style) {
      try { await figma.loadFontAsync({ family: family, style: nospace }); fontCache[k] = nospace; return nospace; } catch(e) {}
    }
    fontCache[k] = null; return null;
  }

  // Verificar fuente base obligatoria
  var pjsRegular = await resolveFont('Plus Jakarta Sans', 'Regular');
  if (!pjsRegular) {
    figma.notify('❌ Plus Jakarta Sans no está disponible en este archivo. Agrégala primero en el panel de fuentes.', { timeout: 8000 });
    figma.closePlugin(); return;
  }

  // Resolver todos los pesos de Plus Jakarta Sans disponibles
  var pjsWeights = ['ExtraLight', 'Light', 'Regular', 'Medium', 'SemiBold', 'Bold', 'ExtraBold'];
  var pjsMap = {}; // peso lógico → nombre real Figma
  for (var pw = 0; pw < pjsWeights.length; pw++) {
    var res = await resolveFont('Plus Jakarta Sans', pjsWeights[pw]);
    if (res) pjsMap[pjsWeights[pw]] = res;
  }

  // Resolver estilos en TEXT_STYLES y adjuntar nombre real
  for (var t = 0; t < TEXT_STYLES.length; t++) {
    TEXT_STYLES[t]._r = await resolveFont(TEXT_STYLES[t].family, TEXT_STYLES[t].style);
  }

  // ── 3. Leer estilos existentes ──────────────────────────
  var existingText   = await figma.getLocalTextStylesAsync();
  var existingEffect = await figma.getLocalEffectStylesAsync();
  var textByName = {}, effectByKey = {};
  for (var et = 0; et < existingText.length;  et++) textByName[existingText[et].name] = existingText[et];
  for (var ee = 0; ee < existingEffect.length; ee++) {
    var ef = existingEffect[ee];
    if (ef.effects.length > 0 && ef.effects[0].type === 'DROP_SHADOW') {
      var c0 = ef.effects[0].color || { r: 0, g: 0, b: 0 };
      effectByKey[makeEffectKey(ef.effects[0].radius, c0.r, c0.g, c0.b)] = ef;
    }
  }

  // ── 4. Crear/actualizar Text Styles ─────────────────────
  // Siempre forzar fontName correcto en estilos existentes:
  // Tokens Studio u otras corridas pueden haber dejado el font incorrecto.
  var textCreated = 0;
  for (var ts = 0; ts < TEXT_STYLES.length; ts++) {
    var d = TEXT_STYLES[ts];
    if (!d._r) continue;
    var lhVal = d.lh === null ? { unit: 'AUTO' } : { unit: 'PIXELS', value: d.lh };
    if (textByName[d.name]) {
      // Actualizar estilo existente con font correcto
      try {
        textByName[d.name].fontName   = { family: d.family, style: d._r };
        textByName[d.name].fontSize   = d.size;
        textByName[d.name].lineHeight = lhVal;
        if (d.tc) textByName[d.name].textCase = d.tc;
      } catch(e) { /* estilo de librería — solo lectura */ }
      continue;
    }
    try {
      var ns = figma.createTextStyle();
      ns.name       = d.name;
      ns.fontName   = { family: d.family, style: d._r };
      ns.fontSize   = d.size;
      ns.lineHeight = lhVal;
      if (d.tc) ns.textCase = d.tc;
      textByName[d.name] = ns;
      textCreated++;
    } catch(e) { console.error('createTextStyle', d.name, e.message); }
  }

  // ── 5. Crear Effect Styles faltantes ────────────────────
  var effectCreated = 0;
  for (var es = 0; es < EFFECT_STYLES.length; es++) {
    var ed = EFFECT_STYLES[es];
    var ek = makeEffectKey(ed.radius, ed.r, ed.g, ed.b);
    if (effectByKey[ek]) continue;
    try {
      var ne = figma.createEffectStyle();
      ne.name    = ed.name;
      ne.effects = [{ type: 'DROP_SHADOW',
                      color: { r: ed.r, g: ed.g, b: ed.b, a: ed.alpha },
                      offset: { x: 0, y: ed.offsetY }, radius: ed.radius, spread: 0,
                      visible: true, blendMode: 'NORMAL' }];
      effectByKey[ek] = ne;
      effectCreated++;
    } catch(e) { console.error('createEffectStyle', ed.name, e.message); }
  }

  // ── 6. Lista plana de text styles ───────────────────────
  var dsStyles = [];
  for (var dn in textByName) dsStyles.push(textByName[dn]);

  // ── 7. Aplicar a todos los nodos ────────────────────────
  var allNodes = homepage.findAll(function() { return true; });
  var textApplied = 0, effectApplied = 0, textNodes = 0, missed = 0, fontReplaced = 0;
  var missedLog = [];

  for (var n = 0; n < allNodes.length; n++) {
    var node = allNodes[n];

    // — Text ──────────────────────────────────────────────
    if (node.type === 'TEXT' && node.fontName !== figma.mixed && node.fontSize !== figma.mixed) {
      textNodes++;
      var curFam = node.fontName.family;
      var curSty = node.fontName.style;

      // ② Sustituir Roboto / Inter / Buenos Aires → Plus Jakarta Sans
      if (FONT_REPLACE[curFam]) {
        var logicWeight = STYLE_REPLACE[curSty] || 'Regular';
        var resolvedWeight = pjsMap[logicWeight];
        if (resolvedWeight) {
          try {
            node.fontName = { family: 'Plus Jakarta Sans', style: resolvedWeight };
            curFam = 'Plus Jakarta Sans';
            curSty = resolvedWeight;
            fontReplaced++;
          } catch(e) {}
        }
      }

      // ② b) Normalizar pesos PJS sin TEXT_STYLE (Medium→SemiBold, Light→Regular, ExtraLight→Regular)
      //    Ocurre cuando el nodo ya es PJS pero con un peso que no tiene text style definido
      var PJS_NORMALIZE = { 'Medium': 'SemiBold', 'Light': 'Regular', 'ExtraLight': 'Regular' };
      if (curFam === 'Plus Jakarta Sans' && PJS_NORMALIZE[curSty]) {
        var normWeight = pjsMap[PJS_NORMALIZE[curSty]];
        if (normWeight) {
          try {
            node.fontName = { family: 'Plus Jakarta Sans', style: normWeight };
            curSty = normWeight;
            fontReplaced++;
          } catch(e) {}
        }
      }

      // ③ Aplicar text style
      var lh     = node.lineHeight !== figma.mixed ? node.lineHeight : { unit: 'AUTO' };
      var result = findBestTextStyle(dsStyles, curFam, curSty, node.fontSize, lh, node.textCase !== figma.mixed ? node.textCase : 'ORIGINAL');
      if (result) {
        try {
          if (result.snappedSize !== null) node.fontSize = result.snappedSize;
          await node.setTextStyleIdAsync(result.style.id);
          textApplied++;
        } catch(e) { missed++; }
      } else {
        missed++;
        missedLog.push('MISS [' + node.name + '] ' + curFam + '/' + curSty + ' ' + Math.round(node.fontSize) + 'px');
      }
    }

    // — Effects ───────────────────────────────────────────
    if (node.effects && node.effects.length > 0) {
      for (var ei = 0; ei < node.effects.length; ei++) {
        var eff = node.effects[ei];
        if (eff.type === 'DROP_SHADOW') {
          var ec  = eff.color || { r: 0, g: 0, b: 0 };
          var ek2 = makeEffectKey(eff.radius, ec.r, ec.g, ec.b);
          if (effectByKey[ek2]) {
            try { await node.setEffectStyleIdAsync(effectByKey[ek2].id); effectApplied++; break; } catch(e) {}
          }
        }
      }
    }
  }

  // ── 8. Log detallado al canvas ───────────────────────────
  try {
    var logLines2 = ['=== StyleBuilder v5 — Diagnóstico ==='];

    logLines2.push('\n-- Pesos PJS resueltos --');
    var pjsWeightsList = ['ExtraLight','Light','Regular','Medium','SemiBold','Bold','ExtraBold'];
    for (var lw = 0; lw < pjsWeightsList.length; lw++) {
      var wn = pjsWeightsList[lw];
      logLines2.push((pjsMap[wn] ? 'OK  ' : 'FAIL') + ' PJS/' + wn + (pjsMap[wn] ? ' → "' + pjsMap[wn] + '"' : ' → NO DISPONIBLE'));
    }

    logLines2.push('\n-- Text styles definidos --');
    for (var tl = 0; tl < TEXT_STYLES.length; tl++) {
      var td = TEXT_STYLES[tl];
      logLines2.push((td._r ? 'OK  ' : 'SKIP') + ' ' + td.name + ' [' + td.family + '/' + td.style + ']' + (td._r ? ' → "' + td._r + '"' : ' → fuente no disponible'));
    }

    logLines2.push('\n-- dsStyles con PJS --');
    for (var dd = 0; dd < dsStyles.length; dd++) {
      var ds = dsStyles[dd];
      if (ds.fontName && ds.fontName.family && ds.fontName.family.indexOf('Jakarta') > -1) {
        logLines2.push(ds.name + ' | ' + ds.fontName.style + ' | ' + ds.fontSize + 'px');
      }
    }

    logLines2.push('\n-- Nodos sin match (' + missedLog.length + ') --');
    for (var ml = 0; ml < missedLog.length; ml++) logLines2.push(missedLog[ml]);

    logLines2.push('\n-- Resumen --');
    logLines2.push('Text styles creados:  ' + textCreated);
    logLines2.push('Effect styles creados:' + effectCreated);
    logLines2.push('Fuentes reemplazadas: ' + fontReplaced);
    logLines2.push('Textos con estilo:    ' + textApplied + '/' + textNodes);
    logLines2.push('Sin match:            ' + missed);
    logLines2.push('Efectos aplicados:    ' + effectApplied);

    await figma.loadFontAsync({ family: 'Plus Jakarta Sans', style: pjsMap['Regular'] || 'Regular' });
    var lt = figma.createText();
    lt.fontName   = { family: 'Plus Jakarta Sans', style: pjsMap['Regular'] || 'Regular' };
    lt.fontSize   = 10;
    lt.characters = logLines2.join('\n');
    var ref = figma.currentPage.selection[0] || homepage;
    lt.x = ref.x + ref.width + 100;
    lt.y = ref.y;
    figma.currentPage.appendChild(lt);
  } catch(le) {}

  // ── 9. Reporte toast ─────────────────────────────────────
  var resolvedEB = pjsMap['ExtraBold'] || '(no disponible)';
  figma.notify(
    '✅ StyleBuilder v5' +
    ' | 🔤 ' + fontReplaced  + ' → PJS [' + resolvedEB + ']' +
    ' | 📝 ' + textCreated   + ' text styles' +
    ' | ✨ ' + effectCreated + ' effect styles' +
    ' | 🎯 ' + textApplied   + '/' + textNodes + ' textos' +
    ' | ❓ ' + missed        + ' sin match' +
    ' | 🌑 ' + effectApplied + ' efectos — Lee log en canvas',
    { timeout: 10000 }
  );
  figma.closePlugin();
}

main().catch(function(err) {
  figma.notify('❌ Error: ' + err.message, { timeout: 5000 });
  console.error(err);
  figma.closePlugin();
});
