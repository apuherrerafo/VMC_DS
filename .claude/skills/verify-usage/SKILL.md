# Skill: verify-usage

Verifica y rectifica el markup de uso de un componente usando Context7,
para garantizar que el código de ejemplo en docs esté actualizado con las
versiones actuales de React, TypeScript y las dependencias del proyecto.

## Trigger
`/verify-usage [nombre-componente]`

Ejemplo: `/verify-usage AuctionCard`

## Pasos

### PASO 1 — Leer el snippet de uso actual
1. Localizar en `Docs.tsx` la constante `USAGE_SNIPPET` del componente indicado.
2. Copiar el markup exacto como está definido.

### PASO 2 — Leer el tipo/interfaz de props del componente
1. Leer `components/[Componente]/types.ts`
2. Extraer la interfaz principal de props (ej. `AuctionCardProps`).
3. Anotar props requeridas vs opcionales.

### PASO 3 — Consultar Context7 para validar React + TypeScript
Usar la herramienta MCP de Context7:
1. Resolver el ID de la librería:
   - `resolve-library-id` → buscar `react` → obtener ID
   - `resolve-library-id` → buscar `typescript` → obtener ID
2. Consultar docs actualizadas:
   - `query-docs` con el ID de React → topic: "JSX event handlers, FC props"
   - `query-docs` con el ID de TypeScript → topic: "strict types, optional props"

### PASO 4 — Validar el snippet
Verificar contra los resultados de Context7:
- [ ] Sintaxis JSX válida con la versión actual de React
- [ ] Tipos de props coinciden con la interfaz definida en `types.ts`
- [ ] Props requeridas todas incluidas
- [ ] Handlers con tipo correcto (ej. `(id: string) => void`)
- [ ] Sin props deprecated
- [ ] Import path correcto

### PASO 5 — Corregir si hay diferencias
Si el snippet tiene errores o está desactualizado:
1. Mostrar el diff entre snippet actual y snippet corregido
2. Preguntar al usuario: "¿Aplico la corrección?"
3. Si confirma: editar `Docs.tsx` → actualizar `USAGE_SNIPPET`

### PASO 6 — Reportar resultado
Mostrar tabla resumen:

| Check | Estado |
|-------|--------|
| Sintaxis JSX | ✅ / ❌ |
| Props requeridas | ✅ / ❌ |
| Tipos correctos | ✅ / ❌ |
| Import válido | ✅ / ❌ |
| Sin deprecated | ✅ / ❌ |

Si todo ✅ → "Markup validado con Context7. Listo para frontend."
Si algún ❌ → mostrar correcciones aplicadas o pendientes.

## Notas
- Siempre validar contra las versiones en `package.json` del proyecto.
- El snippet de uso debe ser copiable y funcional sin modificaciones.
- No cambiar la lógica del componente, solo el ejemplo de uso en docs.
