# Afterzero Website

React + TypeScript frontend, initialized with the official Vite `react-ts` template.
The responsive landing page implements the approved concept, including desktop Shop dropdown, mobile navigation, local collection filters, search and product preview dialogs. No checkout or backend is connected.

## Local development

Use Node.js 24 LTS and npm (setup verified with Node 24.21.0).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Stop the server with Ctrl+C.
For a clean install from the committed lockfile, use `npm ci`.

```sh
npm run build
npm run lint
npm run preview
```

- `dev`: development server with hot updates.
- `build`: TypeScript checks followed by a production build in `dist/`.
- `lint`: Oxlint checks, including React hook rules.
- `preview`: locally serves an existing production build; run `build` first.

## Stack

- React and React DOM: components and browser rendering.
- TypeScript: typed application code and compile-time checks.
- Vite and its React plugin: development server, React refresh and production bundling.
- Oxlint: static code checks from the current official starter.
- `@types/react`, `@types/react-dom`, `@types/node`: type definitions for React and tooling.
- Plain CSS: styling without an additional framework.
- Node.js and npm: local tooling and dependency management. No application backend is configured.

## Project layout

- `src/main.tsx`: React entry point.
- `src/App.tsx`: minimal app shell.
- `src/index.css`: base styles.
- `public/`: original supplied brand assets, served by Vite at root-relative paths.
- `design/`: approved mockup, research and generation prompt.
- `vite.config.ts`: Vite configuration.
- `tsconfig*.json`: TypeScript configuration.
- `.oxlintrc.json`: lint configuration.

No database, authentication, checkout or external services are connected.
Routing, animation, icon and commerce libraries can be selected when those features are implemented.

## Initialization record

The starter was generated in a temporary subfolder to protect the existing assets:

```sh
npm create vite@latest afterzero-scaffold -- --template react-ts --no-interactive
```

Its configuration was moved into the project root, its demo replaced with a minimal shell,
and the temporary scaffold removed. Existing `public/` and `design/` files were preserved.

References: https://vite.dev/guide/ and https://react.dev/learn/build-a-react-app-from-scratch


## Landing page assets

The hero in `public/images/hero.png` is an illustrative image generated with the built-in image tool. The three product thumbnails use CSS crops of `public/images/product-concepts.png`, the approved design preview. These are placeholders for final product photography. Original logos and wave assets remain unchanged.

Hero generation prompt: Standalone wide 3:2 sports editorial photograph for Afterzero website hero. Two adult athletic runners, woman center and man right, moving on urban running track, cool overcast light, muted grain, dark blurred city at left 40% for text overlay. Woman wears black running singlet with subtle grey angular mirrored wave chevrons, man wears chocolate brown performance tee with muted slate blue mirrored jagged waves. Small white AFTERZERO wordmark on clothing only. Realistic sports fashion campaign. No typography overlay, no UI, no buttons, no borders. Runners fill right two thirds of photograph.

Fonts: Barlow and Barlow Condensed from Google Fonts, with local sans-serif fallbacks. No new npm dependencies were added for the landing page.
