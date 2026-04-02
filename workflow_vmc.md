# Workflow completo — Design System VMC Subastas

---

## Cómo leer este documento

- **[TÚ]** → acción manual tuya (PO/Diseñador)
- **[CLAUDE CODE]** → se ejecuta en la terminal de Claude Code
- **[AI ENGINEER + CURSOR]** → Fase 3
- 📋 → prompt listo para usar, reemplaza solo lo que está entre `[ ]`
- ⏸️ → pausa obligatoria, Claude Code espera tu input antes de continuar

---

## FASE 0 — Preparación (una sola vez)

### 0.1 — Crear la carpeta del proyecto

**[TÚ]**
1. Crea la carpeta `DS-vmcsubastas` en tu PC
2. Abre Claude Code y navega a ella:
```
cd C:\Proyectos\DS-vmcsubastas
```
3. Inicializa el proyecto:
```
/init
```
Esto genera el archivo `CLAUDE.md`. Reemplaza su contenido completo con el siguiente bloque.

---

📋 **CLAUDE.md — Memoria permanente del proyecto**
```markdown
# VMC Subastas — Design System

## Contexto del proyecto
Estamos construyendo el design system de VMC Subastas, una plataforma 
web de subastas de vehículos en Perú (~15 páginas).

Los diseños de origen fueron generados con herramientas de IA (Figma Make).
Son frames planos con valores caóticos, sin tokens, sin Auto Layout.
Nuestro trabajo NO es copiar esos valores — es interpretarlos, normalizarlos 
y construir un sistema coherente a partir de ellos.

Stack: React + TypeScript + Tailwind CSS v4 + OKLCH + W3C DTCG tokens
Equipo: 1 PO (no técnico) + 1 AI Engineer
Figma board del design system: 1NuguaWAQsYmyn6D3HAbDM
Figma board "Prueba-Cursor" (frames originales de Figma Make): 1IANLDtvEW9rauM9w5cHqu

## Arquitectura de tokens (obligatoria)

Dos niveles. Nunca usar valores directos en HTML/CSS final.

Nivel 1 — Primitivos (valores crudos, NO van en HTML):
  --purple-500: oklch(0.380 0.180 285.000);
  --space-4: 16px;

Nivel 2 — Semánticos (intención de uso, SÍ van en HTML):
  --color-action-primary: var(--purple-500);
  --padding-card: var(--space-4);

Nomenclatura semántica obligatoria:
  MAL: --color-blue-500, --font-16, --padding-20
  BIEN: --color-action-primary, --font-body, --padding-card-inner

Todos los colores primitivos van en espacio OKLCH, nunca HEX.

## Reglas de NORMALIZACIÓN

Normalizar = interpretar los valores caóticos de la IA y convertirlos
a valores con lógica matemática. Se aplica SIEMPRE al leer Figma.

### Colores
- Métrica: Delta E en espacio OKLCH (ΔE_OK)
- Umbral de fusión: ΔE ≤ 2.0 = mismo color (error de IA) → fusionar
- ΔE > 2.0 = colores distintos e intencionales → mantener ambos
- Al fusionar: calcular el centroide (promedio de L, C y H de ambos)
- Truncar a máximo 3 decimales
- Ejemplo: #1D4ED8 y #1E3A8A (ΔE = 1.4) → oklch(0.450 0.180 255.000)

### Tipografía — familia tipográfica
- Fuente principal (todo el sistema — display, body, UI): **Plus Jakarta Sans** — open source, Google Fonts
  Carga: `<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">`
- Fuente monoespaciada (VINs, placas): **Roboto Mono** — open source, Google Fonts
- ⚠️ Buenos Aires e Inter fueron fuentes del diseño IA original — ya no se usan en ningún lugar
- Si Figma Make o el frame original reportan "Buenos Aires" o "Inter", sustituir siempre por Plus Jakarta Sans

### Tipografía — tamaños
- Escala base: Segunda Mayor (×1.125) desde 16px
  Valores de la escala: 10, 11, 12, 14, 16, 18, 20, 24, 27, 30, 34, 38
- Umbral de fusión: si el valor de la IA está a ≤ 2px de un escalón → 
  forzar al escalón exacto
- Font-sizes con decimales: redondear al entero más cercano primero,
  luego aplicar umbral de fusión
- Ejemplo: 14.4px → 14px → está a 0px del escalón 14 → queda 14px
- Ejemplo: 17px → está a 1px del escalón 18 → queda 18px

### Tipografía — line-height
- Fórmula obligatoria: 4 × ⌊(FontSize × 1.5) / 4⌉
- Ejemplo: font 14px → 4 × ⌊(14 × 1.5) / 4⌉ = 4 × ⌊21/4⌉ = 4 × 5 = 20px
- Ejemplo: font 16px → 4 × ⌊(16 × 1.5) / 4⌉ = 4 × ⌊24/4⌉ = 4 × 6 = 24px
- Resultado siempre en px absoluto, siempre múltiplo de 4

### Tipografía — datos numéricos
- Precios, temporizadores, VINs, placas, lotes: aplicar siempre
  font-variant-numeric: tabular-nums (clase tabular-nums en Tailwind)
- Esto evita que el layout salte cuando los números cambian en tiempo real
- Para VINs y placas además usar fuente monoespaciada

### Spacing (padding, gap, margin)
- Sistema base: grilla de 4px (no 8px — necesitamos granularidad para tablas densas)
- Fórmula de snapping: S_norm = 4 × ⌊S_raw / 4⌉
- Ejemplo: 10.2px → 4 × ⌊10.2/4⌉ = 4 × 3 = 12px
- Ejemplo: 19.992px → 4 × ⌊19.992/4⌉ = 4 × 5 = 20px
- Aplicación: gap para separación entre hermanos, padding para espacio 
  interior, margin solo para estructura macro del layout

### Border-radius
- Máximo 5 niveles (plataforma financiera/transaccional, aspecto riguroso)
- Tabla de asignación por valor raw de la IA:
  ≤ 1.5px  → 0px    (celdas y tablas de datos, nunca redondear)
  2–5px    → 4px    (inputs, checkboxes)
  6–10px   → 8px    (botones primarios)
  11–24px  → 16px   (cards de vehículos, modales)
  > 24px   → 9999px (píldoras, badges, elementos circulares)

### Sombras
- Fórmula: blur = 2 × Y_offset, X siempre = 0
- Color: negro puro con alpha entre 0.05 y 0.12
- 4 niveles estándar:
  shadow-none: ninguna sombra
  shadow-sm:   0 2px 4px rgba(0,0,0,0.06)
  shadow-md:   0 4px 8px rgba(0,0,0,0.08)
  shadow-lg:   0 8px 16px rgba(0,0,0,0.10)
- Cualquier sombra irracional de la IA se colapsa al nivel más cercano

### Z-index
- Aplastar cualquier valor de la IA (9999, 59, etc.) a la escala:
  z-0:  fondo
  z-10: elementos interactivos base
  z-20: dropdowns y tooltips
  z-30: modales y overlays
  z-40: sidebars y drawers
  z-50: alertas críticas y notificaciones

### Transiciones
- ≤ 200ms → forzar a 150ms (micro-interacciones: hover, focus)
- > 200ms → forzar a 300ms (modales, menús desplegables)
- Easing estándar: cubic-bezier(0.3, 0, 0, 1)

## Tokens de animación (incluir siempre en tokens.css)
--duration-micro:    150ms;
--duration-standard: 300ms;
--easing-standard:   cubic-bezier(0.3, 0, 0, 1);

## Reset base obligatorio
Incluir siempre en el CSS:
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
  }
}

## Accesibilidad
- Contraste mínimo: 4.5:1 para texto normal, 3:1 para texto grande e iconos
- Datos críticos (precios en vivo, temporizadores): contraste APCA Lc 90
- Todos los componentes interactivos: estado focus visible obligatorio
- Orden de tabulación lógico en todos los formularios

## Estados de componentes (definir siempre los 7)
Default → Hover → Focus → Active → Disabled → Loading → Error

## Layout
- Max-width de página: 1024px, margin: 0 auto
- Body background: #f0f0f0
- Layout interno: flex y grid con porcentajes
- SVGs inline para íconos, nunca emojis ni imágenes externas

## Estructura de archivos
DS-vmcsubastas/
├── CLAUDE.md
├── tokens.css          (master, crece página a página)
├── tokens.json         (equivalente para Figma Variables)
├── /pages              (HTML tokenizado de cada página)
├── /components         (componentes React — Fase 3)
└── /docs               (documentación — Fase 4)
```

---

### 0.2 — Registrar el comando /fase1

**[TÚ]** Escribe esto en Claude Code para registrar el comando personalizado:

---

📋 **Registrar comando /fase1**
```
Quiero registrar un comando personalizado llamado /fase1.

Cuando yo escriba:
/fase1 [link del frame de Figma]

Debes ejecutar automáticamente y en orden los siguientes pasos,
pausando solo donde indico:

PASO 1 — Resize a 1024px:
Lee el CLAUDE.md primero.
Luego lee el frame de Figma con get_variable_defs → get_metadata → get_design_context.
Contexto: este frame viene de un diseño generado con IA (Figma Make).
Es un frame con dimensiones arbitrarias, valores hardcodeados y sin sistema de diseño.
El equipo de desarrollo trabaja a 1024px de ancho — ese es el ancho de referencia para desktop.
Genera el HTML del frame adaptado a 1024px con estas reglas obligatorias de estructura:
- Reajusta el layout para que encaje correctamente en 1024px de ancho
- Usa la fuente tipográfica real encontrada en el frame, no asumas nada
- Usa valores directos (HEX, px) — los tokens se construyen en el siguiente paso
- Incluye el reset de prefers-reduced-motion
- Incluye el script de captura de Figma en el <head>:
  <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
- html y body deben tener exactamente width:1024px, margin:0, padding:0 — sin márgenes laterales ni centrado, para que Figma capture el diseño limpio sin espacio alrededor
Guarda en /pages/[nombre-frame]-1024.html
Levanta un servidor HTTP en el proyecto: python3 -m http.server 8080
La URL para previsualizar y enviar a Figma será:
http://localhost:8080/pages/[nombre-frame]-1024.html#figmacapture
(el hash #figmacapture es obligatorio para que aparezca el banner de Figma)

⏸️ PAUSA 1 — Revisión y envío a Figma:
Muestra este mensaje exacto:
"Frame resizado a 1024px guardado en /pages/[nombre]-1024.html
Para enviarlo a Figma:
1. Asegúrate de tener el Figma desktop app abierto
2. Abre esta URL en Chrome: http://localhost:8080/pages/[nombre]-1024.html#figmacapture
3. Aparecerá el banner de Figma arriba — haz click para enviarlo al board
4. Compara el frame en Figma con el original y dime qué inconsistencias ves
   (proporciones rotas, solapamientos, jerarquía alterada, elementos fuera de lugar)
Escribe CONTINUAR cuando estés conforme, o dime qué corregir."
Espera mi respuesta. Si hay correcciones, aplícalas y vuelve a mostrar
este mensaje hasta que recibas CONTINUAR.

PASO 2 — Construir tokens:
En base a lo que se ve en el frame, construye los tokens aplicando
todas las reglas de normalización del CLAUDE.md:
- Colores: Delta E en OKLCH, umbral ΔE ≤ 2.0 para fusionar, centroide al fusionar
- Tipografía: escala Segunda Mayor, snapping ≤ 2px, line-height fórmula 4×⌊(fs×1.5)/4⌉
- Spacing: grilla 4px, fórmula S_norm = 4×⌊S_raw/4⌉
- Border-radius: tabla de 5 niveles (0 / 4 / 8 / 16 / 9999)
- Sombras: 4 niveles estándar, blur = 2×Y_offset
- Z-index: escala 0/10/20/30/40/50
- Transiciones: ≤200ms→150ms, >200ms→300ms
Arquitectura obligatoria dos niveles: Primitivos (valores crudos) + Semánticos (intención de uso).
Si ya existe tokens.css: compara y agrega solo tokens genuinamente nuevos,
aplica fusión automática con los existentes.
Si es la primera página: crea tokens.css y tokens.json desde cero.
Genera dos archivos de salida:
- tokens.css → para uso en código (Fase 3)
- tokens.json → en formato W3C DTCG, para importar en Figma via Tokens Studio

⏸️ PAUSA 2 — Confirmar tokens:
Muestra este mensaje:
"Tokens construidos. Resumen:
- Tokens nuevos agregados: [N]
- Fusiones realizadas: [lista cada una con valor original → valor normalizado y justificación]
- Conflictos con tokens existentes: [si los hay, explica cuál y por qué]
Archivos generados: tokens.css y tokens.json
¿Confirmas los tokens? Escribe CONTINUAR para seguir, o dime qué ajustar."
Espera mi respuesta antes de continuar.

PASO 3 — Importar tokens en Figma (Tokens Studio) — acción manual:
Muestra este mensaje exacto:
"Antes de continuar, necesitas importar los tokens en Figma como Variables nativas.
Sigue estos pasos:
1. En Figma, abre el board del design system (1NuguaWAQsYmyn6D3HAbDM)
2. Plugins → Development → Tokens Studio → Run
3. En Tokens Studio: Settings → Import → selecciona tokens.json
4. Confirma la importación — esto crea las Variables nativas de Figma
   organizadas en dos grupos: Primitivos y Semánticos
Sin este paso, TokenApplier no tiene Variables a qué bindear.
Cuando termines, escribe CONTINUAR."
Espera mi respuesta antes de continuar.

PASO 4 — Enviar frame al board del design system:
Envía /pages/[nombre-frame]-1024.html al board del design system.
fileKey destino: 1NuguaWAQsYmyn6D3HAbDM
Crea el frame a 1024px en una página llamada "Páginas procesadas".
Nómbralo: [nombre-frame]-desktop

PASO 5 — Bindear Variables (TokenApplier) — acción manual en Figma:
Muestra este mensaje exacto:
"Frame [nombre-frame]-desktop creado en el board del design system.
Ahora ejecuta el plugin TokenApplier sobre ese frame:
1. En Figma, selecciona el frame [nombre-frame]-desktop
2. Plugins → Development → TokenApplier → Run
El plugin vincula las Variables nativas de Figma (importadas con Tokens Studio)
a todos los nodos del frame (colores, radios, espaciados).
Resultado esperado: ~530 bindings.
Cuando termine, escribe CONTINUAR."
Espera mi respuesta antes de continuar.

PASO 6 — Crear y aplicar Styles (StyleBuilder) — acción manual en Figma:
Muestra este mensaje exacto:
"Ahora ejecuta el plugin StyleBuilder sobre el mismo frame:
1. Con el frame [nombre-frame]-desktop visible
2. Plugins → Development → StyleBuilder → Run
El plugin crea Text Styles y Effect Styles a partir de los tokens
y los aplica a todos los nodos de texto y sombras del frame.
Resultado esperado: ~24 Text Styles + 3 Effect Styles creados y aplicados.
Cuando termine, escribe CONTINUAR."
Espera mi respuesta antes de continuar.

PASO 7 — Auditoría:
Lee ambos frames con get_design_context:
  - Frame original en board: 1IANLDtvEW9rauM9w5cHqu
  - Frame tokenizado en board: 1NuguaWAQsYmyn6D3HAbDM
Usa get_screenshot en ambos.
Compara colores, tipografías, espaciados y proporciones.
IMPORTANTE: las diferencias por normalización son correctas y esperadas
(ej. 19.992px → 20px NO es un error). Solo reporta diferencias que
afecten la fidelidad visual real.
Formato:
✅ Correcto y fiel al original
⚠️ Diferencia menor no crítica
❌ Incorrecto visualmente + descripción del problema + dónde corregirlo (HTML o Figma)

PASO 8 — Reporte final de página:
Muestra resumen:
"Página [nombre] procesada.
Tokens en el sistema: [N total]
Tokens nuevos esta página: [N]
Issues a corregir: [lista de ❌ si los hay]
¿Corrijo yo los issues, o los manejas tú directamente en Figma?"
```

---

A partir de este momento, para procesar cualquier página solo escribe:
```
/fase1 [link del frame de Figma]
```

---

## FASE 2 — UI Kit en Figma

**Cuándo ejecutar:** después de completar la Fase 1 para todas las páginas necesarias (al menos la homepage con TokenApplier y StyleBuilder aplicados).

> ⚠️ **Limitación Figma Free:** en archivos compartidos con otros, el plan Free no permite correr plugins. Solución: crea un archivo Figma **en tu propia cuenta gratuita** y trabaja ahí. Los plugins locales se cargan via `manifest.json` sin publicarlos.

> ℹ️ **Prerequisito:** el frame de la página debe tener Variables bindeadas (TokenApplier ✓) y Styles aplicados (StyleBuilder ✓) antes de extraer componentes. Ambos pasos se completaron en la Fase 1.

---

### Plugins del Design System usados en esta fase

Todos están en `C:\Proyectos\DS-vmcsubastas\` y se cargan en Figma via:
**Plugins → Development → Import plugin from manifest**

| Plugin | Carpeta | Qué hace |
|--------|---------|----------|
| **CompoBuilder** | `/CompoBuilder` | Escanea el frame tokenizado, detecta patrones repetidos y crea la página "Propuesta de Componentes" organizada por categoría |
| **UIKitBuilder** | `/UIKitBuilder` | Toma la propuesta aprobada y genera ComponentSets con los estados correspondientes en la página "UI Kit" |

---

### 2.1 — Extraer componentes (CompoBuilder)

**[TÚ]** En Figma, selecciona el frame `[nombre-frame]-desktop` → corre **CompoBuilder**.

El plugin escanea el frame (que ya tiene Variables y Styles aplicados desde Fase 1) y detecta los patrones visuales repetidos como candidatos a componentes.

Resultado: página "Propuesta de Componentes" con los componentes detectados, organizados por categoría.

**[TÚ]** Revisa la página en Figma. Aprueba, renombra o elimina lo que necesites antes de continuar.

Componentes detectados actualmente:
- **Buttons:** CTA, Login, Secondary, IconOnly, IconOnly/Small, Tab/Text, Tab/WithIcon
- **Badge:** Status
- **Links/Nav:** TextArrow, SideLink, SocialLink
- **Cards:** VehicleCard
- **Sections:** Hero, Header, HelpCTA
- **Footer:** LinkItem
- **Display:** Price/Hero, Price/Card
- **Layout:** Sidebar, Footer

---

### 2.2 — Construir UI Kit (UIKitBuilder)

**[TÚ]** Corre **UIKitBuilder** → genera la página "UI Kit" con ComponentSets a partir de la propuesta aprobada.

El plugin toma cada componente de la propuesta y crea un ComponentSet con los estados que corresponden a su categoría:

| Componentes | Estados |
|-------------|---------|
| Button, Link, Nav | Default · Hover · Focus · Active · Disabled · Loading · Error |
| Card | Default · Hover · Loading |
| Badge | Default · Disabled |
| Footer, Display, Section, Layout | Estático (sin variantes) |

> ℹ️ Los estados no-Default tienen pistas visuales de opacidad como punto de partida. El diseñador aplica el estilo visual definitivo (colores, bordes, sombras) sobre cada variante.

Para encontrar los ComponentSets: en la página "UI Kit" presiona **Ctrl+Shift+H** para centrar el contenido. Los recuadros con borde morado son los ComponentSets. En el panel derecho al seleccionar uno aparece el dropdown **State**.

---

### 2.3 — Validar con Design Lint

**[TÚ]** En Figma: **Plugins → Search → "Design Lint"** (autor: Daniel Destefanis).

1. Selecciona todo el contenido de la página "UI Kit" (Ctrl+A)
2. Corre Design Lint
3. Confirma que los ComponentSets heredaron Variables y Styles correctamente
4. Errores aceptables (excepciones documentadas):
   - `Missing fill style — Linear Gradient` → los gradientes no soportan Variables ni Styles en Figma
   - `Missing fill style — Mixed values` → nodos con capas múltiples de fill

Todo lo demás debe estar en 0 errores antes de pasar a Fase 3.

---

## FASE 3 — Code Library

**Responsable: AI Engineer + Cursor**

### 3.1 — Setup

**[AI ENGINEER]** En Claude Code desde `DS-vmcsubastas`:
```
/create design system rules
```
Esto escanea el proyecto y enriquece el `CLAUDE.md` con las reglas reales encontradas en el código.

### 3.2 — Generar componentes React

**[AI ENGINEER + CURSOR]** Por cada componente del UI Kit:

---

📋 **PROMPT — Componente React**
```
Lee el CLAUDE.md. Genera el componente React para este elemento del UI Kit.

Componente en Figma: [LINK DEL COMPONENTE]
Figma fileKey: 1NuguaWAQsYmyn6D3HAbDM

1. Lee el componente con get_design_context
2. Usa get_screenshot para referencia visual
3. Genera el componente con:
   - TypeScript estricto con interface de props
   - Tailwind v4 usando tokens semánticos del tokens.css
   - Arquitectura de slots para contenido variable
   - Los 7 estados: Default, Hover, Focus, Active, Disabled, Loading, Error
   - font-variant-numeric: tabular-nums en todos los elementos con números
   - ARIA labels y roles semánticos
   - Contraste mínimo 4.5:1 verificado
4. Guarda en /components/[NombreComponente].tsx
5. Genera /components/[NombreComponente].stories.tsx para Storybook

Nomenclatura: PascalCase para componente, kebab-case para archivos y tokens.
```

---

### 3.3 — Sincronización inversa (código → Figma)

Si se modifica un componente en código y necesitas reflejarlo en Figma:

**[AI ENGINEER]** En Claude Code:
```
Toma el componente actualizado en /components/[NombreComponente].tsx
y actualiza su correspondiente en Figma.
Figma fileKey: 1NuguaWAQsYmyn6D3HAbDM
```

### 3.4 — Figma Code Connect

**[AI ENGINEER]** Vincula cada componente React con su correspondiente en Figma. Esto permite que futuras generaciones de código con IA usen los componentes reales del proyecto, no versiones genéricas.

---

## FASE 4 — Documentación

**[AI ENGINEER]** En Claude Code:

---

📋 **PROMPT — Documentación**
```
Lee el CLAUDE.md. Genera la documentación completa del design system.

Fuentes:
- tokens.css
- /components (todos los archivos)

Genera en /docs:
- README.md → introducción y guía de inicio rápido
- tokens.md → referencia de todos los tokens con ejemplos de uso
- Por cada componente → /docs/components/[nombre].md con:
  · Qué es y cuándo usarlo
  · Cuándo NO usarlo
  · Props disponibles con tipos
  · Ejemplos de código para cada estado
  · Notas de accesibilidad
```

---

## Estructura final del proyecto

```
DS-vmcsubastas/
├── CLAUDE.md
├── tokens.css
├── tokens.json
├── /pages
│   ├── index.html
│   └── [otras páginas].html
├── /components
│   ├── VehicleCard.tsx
│   ├── VehicleCard.stories.tsx
│   └── [otros componentes]
└── /docs
    ├── README.md
    ├── tokens.md
    └── /components
```

---

## Resumen de comandos y plugins por fase

| Fase | # | Acción | Quién | Herramienta |
|------|---|--------|-------|-------------|
| **1** | — | `/fase1 [link]` | Claude Code | Automatizado — por cada página nueva |
| **1** | 1 | **Tokens Studio** | TÚ en Figma | Importa tokens.json → crea Variables nativas de Figma |
| **1** | 2 | **TokenApplier** | TÚ en Figma | Bindea las Variables a todos los nodos del frame |
| **1** | 3 | **StyleBuilder** | TÚ en Figma | Crea y aplica Text Styles y Effect Styles al frame |
| **2** | 4 | **CompoBuilder** | TÚ en Figma | Detecta componentes del frame → "Propuesta de Componentes" |
| **2** | 5 | **UIKitBuilder** | TÚ en Figma | Genera ComponentSets con estados → "UI Kit" |
| **2** | 6 | **Design Lint** | TÚ en Figma | Valida 0 errores en el UI Kit |
| **3** | 7 | Componente React | AI Engineer + Cursor | Por cada componente del UI Kit |
| **4** | 8 | Documentación | AI Engineer + Cursor | Al finalizar el código |
