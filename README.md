# ASSID — Sitio web

Landing page de **ASSID** (Soluciones Industriales y Digitales) construida con
[Astro](https://astro.build) y [Tailwind CSS v4](https://tailwindcss.com).

## 🧞 Comandos

Desde la raíz del proyecto:

| Comando          | Acción                                            |
| :--------------- | :------------------------------------------------ |
| `pnpm install`   | Instala las dependencias                          |
| `pnpm dev`       | Servidor de desarrollo en `http://localhost:4321` |
| `pnpm build`     | Compila el sitio de producción en `./dist/`       |
| `pnpm preview`   | Previsualiza el build localmente                  |

## 🎨 Marca

- **Paleta** y **tipografías** (Sora + Manrope, auto-hospedadas) se definen como
  tokens de Tailwind en [`src/styles/global.css`](src/styles/global.css) (bloque `@theme`).
  Cambiar un color ahí lo propaga a todo el sitio.
- **Logo:** [`public/logo.svg`](public/logo.svg) y favicon [`public/favicon.svg`](public/favicon.svg),
  extraídos del diseño original. El componente [`src/components/Logo.astro`](src/components/Logo.astro)
  admite las variantes `color` y `light`.

## 🗂️ Estructura

```
src/
├── consts.ts            # Datos de contacto, navegación y metadatos (editar aquí)
├── layouts/Layout.astro # <head>, SEO, animaciones globales
├── components/          # Header, Hero, Paradigma, Servicios, Metodo,
│                        # Alianzas, Quienes, Contacto, Footer, Marquee, Logo
└── pages/index.astro    # Ensamblaje de la página
```

## ✍️ Pendientes por completar

1. **Datos de contacto:** completar `email`, `whatsapp`, `phone` y `linkedin` en
   [`src/consts.ts`](src/consts.ts). Mientras estén vacíos, la web muestra
   "Disponible pronto" y no expone información sensible.
2. **Foto del equipo:** reemplazar el placeholder en [`src/components/Quienes.astro`](src/components/Quienes.astro)
   por una imagen real (ver comentario en el archivo).
3. **Imagen social (opcional):** añadir un `og:image` (PNG 1200×630) para compartir en redes.

> El HTML original se conserva **localmente** en `reference/` (excluido del
> repositorio por contener datos de contacto reales).
