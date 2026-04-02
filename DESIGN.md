# Design System Specification: Editorial Excellence for High-Value Assets

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Curator"**

This design system is engineered to elevate high-value vehicle auctions from a mere transaction to a curated, high-end editorial experience. We reject the "standard marketplace" aesthetic. Instead, we embrace the precision of a luxury gallery and the authority of a premium automotive magazine.

By utilizing intentional asymmetry, deep tonal layering, and sophisticated typography scales, we create a "Vault" atmosphere—secure, exclusive, and vibrant. The system breaks the rigid grid by using overlapping elements and high-contrast typographic hierarchies to guide the user's eye with editorial intent.

---

## 2. Colors
Our palette is anchored by the depth of "The Vault" (Primary) and lifted by sharp, functional accents that signal market urgency and status.

### Core Palette
- **Primary (The Vault):** `#22005C` – Used for navigation, primary CTAs, and structural grounding.
- **Secondary (En Vivo):** `#ED8936` – Reserved for live events and urgent status indicators.
- **Tertiary (Negociable):** `#00CACE` – Used for negotiable status and interactive highlights.
- **Surface Tiers:**
  - **Level 0 (Base Background):** `#F8FAF9`
  - **Level 1 (Sub-sectioning):** `#F2F4F3`
  - **Level 2 (Cards/Interaction):** `#FFFFFF`

### The "No-Line" Rule
**Designers are strictly prohibited from using 1px solid borders for sectioning or containment.** 
Boundaries must be defined solely through background color shifts. For example, a `surface_container_low` (`#F2F4F3`) card sits on a `surface` (`#F8FAF9`) background. This creates a softer, more sophisticated separation that feels architectural rather than "drawn."

### The "Glass & Gradient" Rule
To add visual "soul," utilize the **Vault Gradient** (135deg `#22005C` to `#391383`) for hero banners and primary action areas. For floating elements, such as favorite icons over imagery, apply **Glassmorphism**: 40% white fill with an 8px backdrop-blur.

---

## 3. Typography
We use a dual-typeface system to balance modern luxury with technical precision.

- **Display & Headlines (Plus Jakarta Sans):** High-character, geometric, and authoritative. Used for vehicle names, auction headers, and badges. 
  - *Creative Direction:* Use `display-lg` (3.5rem) for hero headlines to establish a magazine-style impact.
- **Body & Data (Inter):** Neutral and highly legible. Used for technical specs, pricing, and long-form descriptions.
  - *Creative Direction:* Prices should utilize `title-lg` (1.375rem) in Inter to ensure numerical clarity.

---

## 4. Elevation & Depth
In this design system, "Depth" is a product of light and layering, not artificial dividers.

- **The Layering Principle:** Stack surface tiers to create hierarchy. A `surface_container_lowest` (`#FFFFFF`) card should be nested within a `surface_container_low` (`#F2F4F3`) wrapper to provide a natural, soft lift.
- **Ambient Shadows:** When a "floating" effect is required (e.g., active cards), use the **Tinted Box-Shadow**: `0 8px 24px rgba(34, 0, 92, 0.04)`. By tinting the shadow with the primary Vault color, we mimic natural light passing through a high-end lens.
- **The Decorative Base:** To ground our components, cards must utilize a **4px decorative bottom border** using the `primary` or `secondary` tokens. This replaces the need for a full border while adding a "signature" finish.

---

## 5. Components

### Buttons & Inputs
- **Primary Button:** Vault Gradient fill, `lg` (0.5rem / 8px) corner radius, and `label-md` (Plus Jakarta Sans) uppercase text. 
- **Input Fields:** No borders. Use `surface_container_highest` (`#E1E3E2`) for the field background. Labels must be `label-sm` in Plus Jakarta Sans for a technical, "tagged" look.

### Auction Cards
- **Construction:** `surface_container_lowest` (`#FFFFFF`) background.
- **Separation:** No internal dividers. Use `spacing-4` (1.4rem) to separate the image from the title and `spacing-2` (0.7rem) for spec lists.
- **The Signature Finish:** A 4px solid bottom border (`#22005C`).
- **Interaction:** The Favorite icon must be a Glassmorphic circle (40% white, 8px blur) positioned in the top-right of the asset image.

### Chips & Badges
- **Status Badges:** Use `Plus Jakarta Sans` for badge text.
- **En Vivo (Live):** Background `secondary` (`#ED8936`), text `on_secondary` (`#FFFFFF`).
- **Negociable:** Background `tertiary` (`#00CACE`), text `on_tertiary_fixed`.

---

## 6. Do's and Don'ts

### Do
- **DO** use white space as a structural element. If a layout feels cluttered, increase spacing using the `spacing-8` (2.75rem) token.
- **DO** overlap elements (e.g., a vehicle image slightly breaking the container of a card) to create an editorial, non-templated feel.
- **DO** use the `surface_container` tiers to create "islands" of content rather than a monolithic background.

### Don't
- **DON'T** use 100% black for text. Always use `on_surface` (`#191C1C`) to maintain softness.
- **DON'T** use standard 1px borders. If containment is functionally required for accessibility, use a "Ghost Border": `outline_variant` at 10% opacity.
- **DON'T** use standard shadows. If it's not the tinted `0 8px 24px rgba(34, 0, 92, 0.04)`, it doesn't belong in the system.