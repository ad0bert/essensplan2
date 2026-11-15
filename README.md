# Essensplan

Meal planner web app built with [Angular](https://angular.dev) 22 and Angular Material.

Requires Node.js `^22.22.3 || ^24.15.0 || >=26`.

## Development server

```bash
npm install
npm start
```

Open `http://localhost:4200/`. The app reloads on source changes.

The backend URL is configured per build in `src/environments/` (`apiBasePath`).
For local development it points to `http://localhost:8080`; for offline work you can
serve mock responses with [`@ad0bert/mockserver`](https://github.com/ad0bert/mockserver).

## Build

```bash
npm run build
```

Production build output goes to `dist/essensplan/browser`. The app uses path-based
routing, so the web server must answer unknown paths with `index.html`.

## Tests and linting

```bash
npm test          # unit tests (Vitest)
npm run lint      # ESLint (angular-eslint)
npx prettier --check .
```

## API client

`src/app/generated` is generated from `openapi.json` with OpenAPI Generator
(`typescript-angular`); do not edit it by hand. After updating the spec, run:

```bash
npm run generate:api
```

The generator CLI downloads its jar on first use and needs a Java runtime.
