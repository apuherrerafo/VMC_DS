// ============================================================
// NodeScanner v4 — escanea solo la página actual, output a consola
// Corre página por página para no colgar Figma.
// Abre F12 (DevTools) antes de correr para ver el output.
// ============================================================

function main() {
  var page = figma.currentPage;
  var pageName = page.name;

  var componentSets = page.findAllWithCriteria({ types: ['COMPONENT_SET'] });

  if (!componentSets || componentSets.length === 0) {
    figma.notify('Sin COMPONENT_SET en esta página: ' + pageName, { timeout: 4000 });
    figma.closePlugin();
    return;
  }

  var lines = [];
  lines.push('=== PAGE: ' + pageName + ' — ' + componentSets.length + ' component sets ===');

  for (var i = 0; i < componentSets.length; i++) {
    var cs = componentSets[i];
    var variants = [];
    if (cs.children) {
      for (var v = 0; v < cs.children.length; v++) {
        if (cs.children[v].type === 'COMPONENT') {
          variants.push(cs.children[v].name);
        }
      }
    }
    lines.push('[' + variants.length + 'v] ' + cs.name);
    for (var vi = 0; vi < Math.min(variants.length, 3); vi++) {
      lines.push('  · ' + variants[vi]);
    }
    if (variants.length > 3) {
      lines.push('  · (+' + (variants.length - 3) + ' más)');
    }
  }

  lines.push('=== END ===');

  var output = lines.join('\n');
  console.log(output);

  figma.notify('✅ ' + componentSets.length + ' sets en "' + pageName + '" — abre F12 para copiar', { timeout: 6000 });
  figma.closePlugin();
}

main();
