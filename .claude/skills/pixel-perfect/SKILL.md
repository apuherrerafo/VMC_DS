---
name: pixel-perfect
description: Convierte un nodo de Figma en un componente React pixel-perfect, siguiendo los tokens del proyecto y los lineamientos de buenas prácticas del equipo de desarrollo. Ejecutar con /pixel-perfect [URL de Figma].
---

Cuando el usuario escriba `/pixel-perfect [URL de Figma]`, ejecuta automáticamente y en orden los siguientes pasos. Pausa solo donde se indica.

---

## CONTEXTO DEL PROYECTO

Este proyecto es el Design System de VMC Subastas.

**Stack:** React + TypeScript + Vite + Tailwind CSS v4  
**Tokens:** `components/src/tokens.css` — SIEMPRE mapear valores de Figma a tokens semánticos existentes. Nunca hardcodear colores, tamaños o espaciados.  
**Lineamientos:** `Frontend - Lineamientos.docx` — reglas de código del equipo.  
**Sistema de versiones:** Los componentes nuevos/mejorados van en `ComponenteName.upgrade.tsx`. El original nunca se toca.

---

## PASO 1 — Leer el nodo de Figma

Extrae del URL: `fileKey` y `nodeId` (formato `1234-5678` → `1234:5678`).

Ejecuta en orden:
1. `get_design_context` con el nodeId y fileKey
2. `get_screenshot` con el nodeId y fileKey

Reporta:
- Nombre del nodo
- Dimensiones exactas (width × height en px)
- Tipografías encontradas (familia, peso, tamaño, line-height)
- Colores encontrados (HEX o RGBA)
- Espaciados y padding
- Border-radius
- Sombras
- Componentes internos identificados

---

## PASO 2 — Mapeo de valores a tokens

Lee `components/src/tokens.css`.

Para CADA valor encontrado en Figma, busca el token semántico correspondiente:

**Colores:**
- Compara el color de Figma contra los tokens usando Delta E en OKLCH
- ΔE ≤ 2.0 → mapear al token existente
- ΔE > 2.0 → reportar como color sin token (no crear tokens nuevos sin avisar)

**Tipografía:**
- Aplica fusión de escala: si el tamaño está a ≤ 2px de un escalón de la escala (10, 11, 12, 14, 16, 18, 20, 24, 27, 30, 34, 38px) → usar el escalón exacto
- Mapear al token tipográfico semántico correspondiente (`--type-card-title-size`, `--font-body`, etc.)

**Espaciado:**
- Snapear a grilla de 4px: `S_norm = 4 × ⌊S_raw / 4⌉`
- Mapear al token semántico (`--spacing-card-padding`, `--space-3`, etc.)

**Border-radius:**
- ≤ 1.5px → `--radius-none` (0px)
- 2–5px → `--radius-sm` (4px)
- 6–10px → `--radius-md` (8px)
- 11–24px → `--radius-lg` (16px)
- > 24px → `--radius-full` (9999px)

**Sombras:**
- Mapear al nivel más cercano: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-card`

Muestra tabla de mapeo antes de continuar:
```
VALOR FIGMA          →  TOKEN SEMÁNTICO
─────────────────────────────────────────
#3b1782 (ΔE=0.8)    →  var(--color-text-primary)
11px / 16px          →  var(--type-card-title-size) / var(--type-card-title-lh)
12px padding         →  var(--spacing-card-padding)
...
```

---

## PASO 3 — Generar estructura de archivos

Determina el nombre del componente desde el nodo de Figma (PascalCase, sin espacios).

Crea los siguientes archivos en `components/src/components/[NombreComponente]/`:

### `types.ts`
```typescript
// Tipos del componente — sin 'any', todos los props tipados estrictamente
export interface [NombreComponente]Props {
  // props derivadas del diseño de Figma
}
```

### `constants.ts`
```typescript
// Dimensiones pixel-perfect de Figma (las que no tienen token)
// Mapas de variantes, labels estáticos, valores de configuración
export const COMPONENT_WIDTH  = '[X]px'   // Figma: [X]px
export const COMPONENT_HEIGHT = '[Y]px'   // Figma: [Y]px
// ...
```

### `styles.ts`
```typescript
import type { CSSProperties } from 'react'
// Objetos CSSProperties usando SOLO tokens semánticos
// Cero valores hardcodeados de color, tipografía o espaciado
// Las dimensiones pixel-perfect de Figma (width/height fijos) sí van como constantes
export const containerStyle: CSSProperties = {
  background:   'var(--color-surface-card)',
  borderRadius: 'var(--radius-card)',
  boxShadow:    'var(--shadow-card)',
  // ...
}
```

### `[NombreComponente].upgrade.tsx`
Componente principal con las siguientes reglas obligatorias (lineamientos del equipo):

**Reglas de código:**
1. **Sin funciones anónimas** — todas las funciones deben ser nombradas o asignadas a constantes
2. **Sin ternarios inline** — usar `if/else` o `&&` para renderizado condicional
3. **Tipado estricto** — prohibido `any`. Todos los props, variables y retornos tipados
4. **Responsabilidad única** — cada sub-componente (icon, placeholder, skeleton) en su propia función nombrada
5. **Si la lógica supera 20 líneas** — extraer a un hook `use[NombreComponente].ts` dentro de la carpeta
6. **Nombres descriptivos** — variables y funciones que explican su intención

Estructura del componente:
```typescript
import type { MouseEvent } from 'react'
import * as S from './styles'
import { CONSTANT_A, CONSTANT_B } from './constants'
import type { [NombreComponente]Props } from './types'

// ── Sub-componentes (si aplica) ───────────────────────────────────────────────

function [SubComponente]() { ... }

// ── Skeleton ──────────────────────────────────────────────────────────────────

export function [NombreComponente]Skeleton() { ... }

// ── Componente principal ──────────────────────────────────────────────────────

export function [NombreComponente]Upgrade({ prop1, prop2, isLoading = false }: [NombreComponente]Props) {

  if (isLoading) return <[NombreComponente]Skeleton />

  // Handlers nombrados (no anónimos)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => { ... }

  // Render helpers nombrados (no anónimos inline)
  function renderContenidoOpcional() {
    if (!condicion) return null
    return <div>...</div>
  }

  return (
    <article style={{ ...S.containerStyle, borderBottom: `3px solid ${ACCENT[variant]}` }}>
      {renderContenidoOpcional()}
    </article>
  )
}

export default [NombreComponente]Upgrade
```

### `index.ts`
```typescript
export { [NombreComponente]Upgrade as [NombreComponente], default } from './[NombreComponente].upgrade'
export type { [NombreComponente]Props } from './types'
```

---

## ⏸️ PAUSA 1 — Revisión del mapeo y estructura

Muestra este mensaje:
```
Componente [NombreComponente] listo para generar.

Mapeo de tokens: [N] valores mapeados, [M] sin token (listar cuáles)
Archivos a crear:
  · types.ts
  · constants.ts  
  · styles.ts
  · [NombreComponente].upgrade.tsx
  · index.ts

¿Confirmas? Escribe CONTINUAR o dime qué ajustar.
```

Espera respuesta antes de continuar.

---

## PASO 4 — Escribir los archivos

Crea todos los archivos definidos en el Paso 3.

Reglas pixel-perfect obligatorias:
- Las dimensiones `width` y `height` fijas de Figma van como constantes en `constants.ts` — son los únicos valores numéricos permitidos fuera de tokens
- Toda propiedad de color, tipografía, spacing, radius y sombra DEBE usar `var(--token)`
- Las imágenes/placeholders deben tener las mismas proporciones que en Figma (verificar con `objectFit` y dimensiones)
- Los textos truncados en Figma → `overflow: hidden; textOverflow: ellipsis; whiteSpace: nowrap`
- Los elementos con posición absoluta en Figma → mantener `position: absolute` con las mismas coordenadas (snapear a múltiplo de 4)

---

## PASO 5 — Conectar al sistema de versiones

En el componente original (`[NombreComponente].tsx`), conecta el upgrade al `VersionContext`:

```typescript
import { useVersion } from '../../VersionContext'
import { [NombreComponente]Upgrade } from './[NombreComponente].upgrade'

// Dentro del componente:
const { version } = useVersion()
if (version === 'upgrade') return <[NombreComponente]Upgrade {...props} />
```

Si el componente original no existe aún, créalo como wrapper simple que delega siempre al upgrade.

---

## PASO 6 — Verificación visual pixel-perfect

Toma un screenshot del componente renderizado en el browser (`http://localhost:5173/?v=upgrade`) usando la herramienta de browser disponible.

Compara visualmente contra el screenshot de Figma del Paso 1.

Analiza y reporta:

```
VERIFICACIÓN PIXEL-PERFECT — [NombreComponente]
────────────────────────────────────────────────
✅ Dimensiones: [W×H]px — correcto
✅ Color fondo: var(--color-surface-card) — correcto
✅ Tipografía título: 11px/16px ExtraBold — correcto
⚠️ Padding inferior: 10px (Figma: 12px) — ajustar a var(--spacing-card-padding)
❌ Radio borde: se ve 8px (Figma: 4px) — corregir a var(--radius-card)

Score de fidelidad: [N]/10
```

Corrige automáticamente los items ❌ y ⚠️ antes de continuar.

---

## PASO 7 — Reporte final

```
✅ Componente [NombreComponente] generado pixel-perfect.

Archivos creados:
  · components/src/components/[NombreComponente]/types.ts
  · components/src/components/[NombreComponente]/constants.ts
  · components/src/components/[NombreComponente]/styles.ts
  · components/src/components/[NombreComponente]/[NombreComponente].upgrade.tsx
  · components/src/components/[NombreComponente]/index.ts

Tokens usados: [lista]
Valores sin token mapeado: [lista o "ninguno"]
Score pixel-perfect final: [N]/10

Ver en: http://localhost:5173/?v=upgrade#[seccion]
```
