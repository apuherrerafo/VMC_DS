// ============================================================
// UIKitBuilder — Paso 2.2 (v2)
// Convierte componentes de "Propuesta de Componentes" en
// ComponentSets con variantes de estado en "UI Kit".
// No requiere frame seleccionado — lee de "Propuesta de Componentes".
// ============================================================

var STATES = {
  'Button':  ['Default', 'Hover', 'Focus', 'Active', 'Disabled', 'Loading', 'Error'],
  'Link':    ['Default', 'Hover', 'Focus', 'Active', 'Disabled', 'Loading', 'Error'],
  'Nav':     ['Default', 'Hover', 'Focus', 'Active', 'Disabled', 'Loading', 'Error'],
  'Card':    ['Default', 'Hover', 'Loading'],
  'Badge':   ['Default', 'Disabled'],
  'Footer':  [],
  'Display': [],
  'Section': [],
  'Layout':  [],
};

function getStates(category) {
  if (STATES[category] !== undefined) return STATES[category];
  return ['Default', 'Hover', 'Active', 'Disabled'];
}

function applyStateHint(comp, state) {
  if      (state === 'Hover')    { comp.opacity = 0.88; }
  else if (state === 'Focus')    { comp.opacity = 0.92; }
  else if (state === 'Active')   { comp.opacity = 0.80; }
  else if (state === 'Disabled') { comp.opacity = 0.40; }
  else if (state === 'Loading')  { comp.opacity = 0.70; }
  else if (state === 'Error')    { comp.opacity = 0.95; }
}

async function main() {

  // ── 1. Localizar páginas ────────────────────────────────
  var proposalPage = null, uiKitPage = null;
  for (var p = 0; p < figma.root.children.length; p++) {
    var pg = figma.root.children[p];
    if (pg.name === 'Propuesta de Componentes') proposalPage = pg;
    if (pg.name === 'UI Kit') uiKitPage = pg;
  }
  if (!proposalPage) {
    figma.notify('❌ No se encontró "Propuesta de Componentes". Corre CompoBuilder primero.', { timeout: 5000 });
    figma.closePlugin();
    return;
  }
  if (!uiKitPage) { uiKitPage = figma.createPage(); uiKitPage.name = 'UI Kit'; }

  // ── 2. Recoger IDs y nombres (sin cambiar de página aún) ─
  await figma.setCurrentPageAsync(proposalPage);
  var sourceNodes = proposalPage.findAll(function(n) { return n.type === 'COMPONENT'; });
  if (sourceNodes.length === 0) {
    figma.notify('❌ No hay componentes en "Propuesta de Componentes".', { timeout: 5000 });
    figma.closePlugin();
    return;
  }
  var sourceInfo = [];
  for (var i = 0; i < sourceNodes.length; i++) {
    sourceInfo.push({ id: sourceNodes[i].id, name: sourceNodes[i].name });
  }

  // ── 3. Cambiar a UI Kit y limpiar ──────────────────────
  await figma.setCurrentPageAsync(uiKitPage);
  var existing = uiKitPage.children.slice();
  for (var r = 0; r < existing.length; r++) { existing[r].remove(); }

  // ── 4. Cargar fuente ────────────────────────────────────
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });

  // ── 5. Construir UI Kit ─────────────────────────────────
  var x = 100, y = 100, rowH = 0, lastCategory = '';
  var setsCreated = 0, variantsTotal = 0, errors = [];

  for (var j = 0; j < sourceInfo.length; j++) {
    var info     = sourceInfo[j];
    var category = info.name.split('/')[0];
    var states   = getStates(category);

    // Obtener nodo fuente por ID (funciona cross-page con dynamic-page)
    var sourceNode = await figma.getNodeByIdAsync(info.id);
    if (!sourceNode || sourceNode.type !== 'COMPONENT') {
      errors.push(info.name + ' (no encontrado)');
      continue;
    }

    // ── Encabezado de categoría ────────────────────────
    if (category !== lastCategory) {
      if (lastCategory !== '') { x = 100; y += rowH + 200; rowH = 0; }
      var lbl = figma.createText();
      lbl.fontName   = { family: 'Inter', style: 'Bold' };
      lbl.fontSize   = 20;
      lbl.characters = category.toUpperCase();
      lbl.x = 100; lbl.y = y;
      uiKitPage.appendChild(lbl);
      y += 40;
      lastCategory = category;
    }

    if (states.length === 0) {
      // ── Componente estático ──────────────────────────
      var staticComp = sourceNode.clone();
      uiKitPage.appendChild(staticComp);
      staticComp.name = info.name;
      staticComp.x = x; staticComp.y = y;
      rowH = Math.max(rowH, staticComp.height);
      x += staticComp.width + 80;
      setsCreated++;

    } else {
      // ── Crear todas las variantes clonando desde la fuente ─
      var variants = [];
      for (var s = 0; s < states.length; s++) {
        var vClone = sourceNode.clone();
        uiKitPage.appendChild(vClone);
        vClone.name = 'State=' + states[s];
        if (s > 0) applyStateHint(vClone, states[s]);
        // Posición temporal fuera del canvas
        vClone.x = -99999 + s * (sourceNode.width + 40);
        vClone.y = -9999;
        variants.push(vClone);
      }

      try {
        var compSet = figma.combineAsVariants(variants, uiKitPage);
        compSet.name = info.name;
        compSet.x = x; compSet.y = y;
        rowH = Math.max(rowH, compSet.height);
        x += compSet.width + 100;
        variantsTotal += states.length;
        setsCreated++;
      } catch (e) {
        // Reportar error real y dejar solo Default
        errors.push(info.name + ': ' + e.message);
        variants[0].name = info.name;
        variants[0].x = x; variants[0].y = y;
        for (var vd = 1; vd < variants.length; vd++) variants[vd].remove();
        rowH = Math.max(rowH, variants[0].height);
        x += variants[0].width + 80;
        setsCreated++;
      }
    }

    if (x > 2400) { x = 100; y += rowH + 160; rowH = 0; }
  }

  // ── 6. Reporte ─────────────────────────────────────────
  var msg = '✅ ' + setsCreated + ' componentes';
  if (variantsTotal > 0) msg += ' | ' + variantsTotal + ' variantes';
  if (errors.length > 0) {
    msg += ' | ⚠️ ' + errors.length + ' errores';
    console.error('UIKitBuilder errors:', errors.join(' / '));
  }
  figma.notify(msg, { timeout: 8000 });
  figma.closePlugin();
}

main().catch(function(err) {
  figma.notify('❌ Error: ' + err.message, { timeout: 5000 });
  console.error('UIKitBuilder fatal:', err);
  figma.closePlugin();
});
