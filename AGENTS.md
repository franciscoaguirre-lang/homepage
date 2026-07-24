# ASSID — Notas del proyecto (para agentes)

> `CLAUDE.md` es un symlink a este archivo. Editar aquí actualiza ambos.

Landing page de **ASSID** (Soluciones Industriales y Digitales), consultora
industrial + digital en Chile. Sitio estático de una sola página.

## Stack
- **Astro 7** (output estático) + **Tailwind CSS v4** vía `@tailwindcss/vite`
  (sin `@astrojs/tailwind`; el CSS se importa en `src/layouts/Layout.astro`).
- Gestor de paquetes: **pnpm** (usar siempre pnpm, no npm).
- Tipografías **auto-hospedadas**: `@fontsource-variable/sora` (display) y
  `@fontsource-variable/manrope` (cuerpo), importadas en `global.css`.
- Analítica: `@vercel/analytics` y `@vercel/speed-insights` (componentes `/astro`
  en el Layout). **Requieren activarse en el dashboard de Vercel** para recolectar.

## Comandos
`pnpm dev` (localhost:4321) · `pnpm build` (→ `dist/`) · `pnpm preview`.
El dev server con `--host` se **demoniza**: pararlo con `pnpm astro dev stop`.

## Estructura
- `src/consts.ts` — **fuente única** de datos de contacto, navegación y metadatos.
- `src/layouts/Layout.astro` — `<head>`, SEO/OpenGraph, script de tema inline
  (anti-parpadeo), Analytics + SpeedInsights, script global (año + reveal).
- `src/components/` — `Header` (nav + toggle de tema), `Hero`, `Marquee`,
  `Paradigma` (servitización), `Servicios`, `Metodo`, `Alianzas`, `Quienes`,
  `Contacto`, `Footer`, `Logo`.
- `src/pages/index.astro` — ensamblaje.
- `public/` — `logo.svg`, `favicon.svg`.

## Sistema de diseño y modo oscuro
- Colores como **tokens semánticos** de Tailwind v4 definidos en
  `src/styles/global.css` (`@theme`): `bg-bg`, `bg-surface`, `bg-card`,
  `text-ink`, `text-muted`, `text-heading`, `border-line`, `text-accent`.
- **Modo oscuro:** los tokens se sobreescriben bajo `:root[data-theme="dark"]`,
  así todo se re-tematiza sin clases `dark:`. Para ajustar los tonos oscuros,
  editar SOLO ese bloque en `global.css`.
- Respeta `prefers-color-scheme`; el toggle (sol/luna, `#theme-toggle`) persiste
  en `localStorage['theme']`. El script inline en `<head>` fija el tema pre-render.
- Acentos de marca **constantes** (`--color-profundo/verde/medio/menta`); los
  paneles verdes (hero, tarjeta "modelo ASSID", Alianzas, Footer) se conservan
  en ambos temas. El `Logo` tiene variantes `color` (adapta) y `light` (fija).
- Paleta base: profundo `#1a4429`, verde `#25623b`, medio `#358f57`,
  menta `#55df87`.

## Narrativa / contenido
Eje central: **la servitización del desarrollo** — pasar de "apagar incendios"
(soluciones puntuales) a un **servicio continuo** que integra capacidades vía la
red de alianzas. Tagline: *"Juntos crecemos"*. Servicios: transformación digital,
consultoría estratégica, consultoría de procesos, red de alianzas.

## Datos de contacto (en `src/consts.ts`)
- Correo: `francisco.aguirre@assid.cl` (activo).
- WhatsApps (lista `whatsapps`, soporta varios): `+56 9 7849 6800` y
  `+56 9 9379 8683` — enlaces `wa.me`, se muestran como celular.
- **LinkedIn: pendiente** (`linkedin: ""` → la web muestra "Disponible pronto").

## Pendientes
1. URL de LinkedIn en `CONTACT.linkedin`.
2. Foto real del equipo (placeholder en `src/components/Quienes.astro`).
3. `og:image` (PNG 1200×630) para redes.

## Deploy (Vercel)
- Conectado a GitHub → **auto-deploy en cada push a `main`**.
- Framework auto-detectado como Astro; **no** hace falta override alguno
  (build `astro build`, output `dist`, install pnpm por el lockfile).
- Node.js **24.x** en el dashboard — OK (satisface `engines.node >=22.12.0`).
- Dominio objetivo: `assid.cl` (aún por conectar; canonical/OG ya apuntan ahí).

## Git / repo
- Remoto: `origin` → `github.com/franciscoaguirre-lang/homepage` (rama `main`).
- Auth de git vía `gh` (`gh auth setup-git`); cuenta `franciscoaguirre-lang`.
- Se commitea directo a `main` (proyecto propio, import inicial).
- `reference/` está **git-ignorado**: contiene el HTML original archivado
  localmente (`index_2.html`).

---

## Astro — desarrollo (guía base)

Iniciar el dev server en segundo plano:

```
astro dev --background
```

Gestionarlo con `astro dev stop`, `astro dev status`, `astro dev logs`.

Documentación: https://docs.astro.build — consultar guías de routing, componentes,
framework components, content collections, estilos/Tailwind e i18n según la tarea.
