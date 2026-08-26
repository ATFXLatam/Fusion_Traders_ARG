# Fusion_Traders_ARG

Landing page versionada de **Fusion Traders ARG**. La lógica y los estilos se sirven vía
**jsDelivr**; **Elementor solo aporta un punto de montaje**.

Build: esbuild + TypeScript + GSAP. Design language basado en OSMO (tokens, easing,
animaciones, tipografía, espaciado).

## Uso en Elementor

Pega esto en un widget **HTML** (no en el widget Form de Elementor):

```html
<div data-aa-mount data-aa-theme="light" data-aa-lang="es"></div>

<script data-cfasync="false"
  src="https://cdn.jsdelivr.net/gh/ATFXLatam/Fusion_Traders_ARG@latest/loader.js"></script>
```

Atributos del mount:
- `data-aa-theme` → `light` | `dark` (default `light`)
- `data-aa-lang`  → `es` | `en` (default `es`)

## Tracking

El Meta Pixel `909413621420786` lo carga el bundle (`src/core/meta-pixel.ts`): `init` +
`PageView` al montar. **WordPress no debe cargar otro pixel de Meta en esta página** — dos
pixeles con el mismo ID duplican eventos. Si hay un plugin de Meta o un snippet en el
header de Elementor, hay que desactivarlo para esta landing.

El token de la Conversions API es server-side y **no va en el repo**: el bundle es público
en jsDelivr.

## Distribución

```
push main → CI (.github/workflows/release.yml): typecheck + build + tag patch +
            regenera loader.js + commitea dist + purga jsDelivr @latest
loader.js @latest → inyecta el tag inmutable @vX.Y.Z (CSS + JS)
```

El repo **debe ser público** (requisito de jsDelivr `/gh/`).

## Desarrollo

```bash
npm install
npm run typecheck   # tsc --noEmit
npm run build       # genera dist/
npm run dev         # build + watch + server en :8766 (sirve preview.html)
```

Ver `CLAUDE.md` para arquitectura, tokens y sistema de animación.
