# Volt Brawl

Playable static build of **Volt Brawl** `1.1.0+e846edd` (solo twin-stick brawler: plaza, three gates, stars you take home).

This tree is the production site mirrored from https://marble-husky-55.beacon.host: `index.html`, hashed `assets/`, Kenney CC0 models under `models/`, PWA manifest, icons, service worker, and `version.json`. Open `index.html` from a static file server and the build runs as deployed.

## Source is pending

The Vite + TypeScript + Three.js project (hub, missions, `package.json`, `src/`, `public/`) is in the private Origin repository [frans-o-balans-grahn/volt-brawl](https://cursor.com/codebase/frans-o-balans-grahn/volt-brawl), commit `e846edd`.

This cloud agent can push to GitHub, but Origin did not accept the session:

- `origin` is not authenticated here. Hosted agents expect an injected `CURSOR_AUTH_TOKEN`, and that variable was not set.
- `https://origin.cursor.com/frans-o-balans-grahn/volt-brawl.git` returns 401 (`git-keeper`).
- The GitHub installation token for this repository is not an Origin bearer token.
- No sibling cloud-agent workspace with the source was visible from this run.
- The beacon deploy has no source maps and no `package.json` / `src/`.

Until that Origin repo can be cloned, this GitHub `main` branch holds the complete static build only, not the original source.

## Run the build

From this directory:

```bash
npx --yes serve .
```

Then open the URL it prints. Paths are relative, so the site also works as a GitHub Pages root (`index.html` at `/`). A `.nojekyll` file is included so Pages will publish `assets/` and `models/`.
