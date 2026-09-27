# Afterzero Website

React + TypeScript frontend, initialized with the official Vite `react-ts` template.
This stage contains only a minimal initialization screen; the approved website design has not been implemented.

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
