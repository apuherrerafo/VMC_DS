---
name: fase1
description: Procesa un frame de Figma Make para el design system VMC Subastas. Lee el CLAUDE.md del proyecto primero (C:\Proyectos\DS-vmcsubastas2\CLAUDE.md.txt). Ejecutar cuando el usuario escriba /fase1 [link de Figma].
---

Lee el CLAUDE.md del proyecto primero: C:\Proyectos\DS-vmcsubastas2\CLAUDE.md.txt

Cuando el usuario escriba `/fase1 [link del frame de Figma]`, ejecuta automáticamente y en orden los siguientes pasos, pausando solo donde se indica:

---

## PASO 1 — Leer el frame con MCP

Contexto: este frame viene de un diseño generado con IA (Figma Make).
Es un frame plano con valores hardcodeados sin sistema de diseño.
Nuestro objetivo es interpretarlo para construir el design system,
no copiarlo exactamente.

Ejecuta en orden: `get_variable_defs` → `get_metadata` → `get_design_context`

Reporta:
- Nombre del frame
- Dimensiones originales
- Fuente tipográfica encontrada
- Colores principales
- Si tiene variables nativas o todo hardcodeado

---

## PASO 2 — Generar HTML pre-optimizado

Aplica todas las reglas de NORMALIZACIÓN del CLAUDE.md.
Usa la fuente que encontraste en el Paso 1, no asumas nada.
Colores como valores HEX directos (los tokens vienen después).
Incluye todos los 7 estados de componentes.
Incluye el reset de prefers-reduced-motion.

Guarda en `/pages/[nombre-frame]-preopt.html`

---

## ⏸️ PAUSA 1 — Revisión visual

Muestra este mensaje exacto:

```
HTML pre-optimizado guardado en /pages/[nombre]-preopt.html
Ábrelo en Chrome siguiendo estos pasos:
1. Presiona F12 para abrir DevTools
2. Haz clic en el ícono de dispositivo (Toggle device toolbar) o Ctrl+Shift+M
3. En la barra superior escribe 1024 en el campo de ancho
4. Compara con el frame original en Figma
¿Se ve bien? Escribe CONTINUAR para seguir, o dime qué corregir.
```

Espera la respuesta del usuario antes de continuar.

---

## PASO 3 — Extraer y fusionar tokens

Aplica todas las reglas de normalización del CLAUDE.md para cada tipo de token.
- Si ya existe `tokens.css`: compara y solo agrega tokens genuinamente nuevos.
- Si es la primera página: crea `tokens.css` desde cero.

Aplica fusión automática (Delta E, umbrales de tipografía y spacing).

---

## ⏸️ PAUSA 2 — Confirmación de tokens

Muestra este mensaje:

```
Tokens extraídos. Resumen:
- Tokens nuevos agregados: [N]
- Fusiones realizadas: [lista con justificación]
- Conflictos con tokens existentes: [si los hay]
¿Confirmas el tokens.css? Escribe CONTINUAR para seguir, o dime qué ajustar.
```

Espera la respuesta del usuario antes de continuar.

---

## PASO 4 — Re-optimizar con tokens

Reemplaza todos los valores directos por `var(--token-semántico)`.
Ningún HEX, px numérico ni valor mágico debe quedar en el HTML.

- Guarda en `/pages/[nombre-frame].html`
- Actualiza `tokens.css` y `tokens.json`

---

## PASO 5 — Aplicar tokens como Variables nativas en Figma

Abre el board del design system: fileKey `1NuguaWAQsYmyn6D3HAbDM`

Crea o actualiza la colección de Variables nativas de Figma con todos los tokens del `tokens.css` actualizado.
Organiza en dos grupos: **Primitivos** y **Semánticos**.
Notifica al usuario cuando estén aplicadas.

---

## PASO 6 — Enviar página a Figma

Envía `/pages/[nombre-frame].html` al board del design system.
- Crea el frame a 1024px en una página llamada **"Páginas procesadas"**
- Nómbralo: `[nombre-frame]-tokenizado`

---

## PASO 7 — Auditoría

Lee ambos frames con `get_design_context`:
- Frame original en board: `1IANLDtvEW9rauM9w5cHqu`
- Frame tokenizado en board: `1NuguaWAQsYmyn6D3HAbDM`

Usa `get_screenshot` en ambos.

Compara colores, tipografías, espaciados y proporciones.

> IMPORTANTE: las diferencias por normalización son correctas y esperadas
> (ej. 19.992px → 20px NO es un error). Solo reporta diferencias que
> afecten la fidelidad visual real.

Formato del reporte:
- ✅ Correcto y fiel al original
- ⚠️ Diferencia menor no crítica
- ❌ Incorrecto visualmente + cómo corregirlo (¿en HTML o en Figma?)

---

## PASO 8 — Reporte final de página

Muestra resumen:

```
Página [nombre] procesada.
Tokens en el sistema: [N total]
Tokens nuevos esta página: [N]
Issues a corregir: [lista de ❌ si los hay]
¿Corrijo yo los issues de HTML, o los manejas tú en Figma?
```
