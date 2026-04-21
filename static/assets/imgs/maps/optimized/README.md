# Map Assets

Generated responsive map derivatives for frontend use.

## Naming

Each source image is assigned a stable sequential id:

- `map-01`
- `map-02`
- ...
- `map-41`

Each id has these responsive variants:

- `-1200`: default UI use, cards, section backgrounds, inline figures
- `-2400`: larger hero surfaces, high-density displays, cropped presentations

Each width is exported in:

- `avif`: primary modern format
- `webp`: broad modern fallback
- `jpg`: legacy/browser fallback

Examples:

- `map-01-1200.avif`
- `map-01-1200.webp`
- `map-01-1200.jpg`
- `map-01-2400.avif`

## Usage Guidance

- Prefer `avif` first, then `webp`, then `jpg`.
- Use `1200` by default unless the image is a dominant visual surface.
- Use `2400` for heroes, wide crops, or 2x-density displays.
- Originals remain untouched in `static/assets/imgs/maps/`.

## Suggested HTML Pattern

```html
<picture>
  <source
    type="image/avif"
    srcset="
      /assets/imgs/maps/optimized/map-01-1200.avif 1200w,
      /assets/imgs/maps/optimized/map-01-2400.avif 2400w
    "
    sizes="(min-width: 900px) 50vw, 100vw"
  />
  <source
    type="image/webp"
    srcset="
      /assets/imgs/maps/optimized/map-01-1200.webp 1200w,
      /assets/imgs/maps/optimized/map-01-2400.webp 2400w
    "
    sizes="(min-width: 900px) 50vw, 100vw"
  />
  <img
    src="/assets/imgs/maps/optimized/map-01-1200.jpg"
    srcset="
      /assets/imgs/maps/optimized/map-01-1200.jpg 1200w,
      /assets/imgs/maps/optimized/map-01-2400.jpg 2400w
    "
    sizes="(min-width: 900px) 50vw, 100vw"
    alt=""
    loading="lazy"
  />
</picture>
```
