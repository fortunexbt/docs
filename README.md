# Field Manual

[![Docs proof](https://github.com/fortunexbt/docs/actions/workflows/docs.yml/badge.svg)](https://github.com/fortunexbt/docs/actions/workflows/docs.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-48EEFF.svg)](LICENSE)

Architecture notes, measured results and reproduction steps for the projects on [fortunexbt.com](https://fortunexbt.com). Read it at [fortunexbt-docs.vercel.app](https://fortunexbt-docs.vercel.app). Each page says what the code does, links the files that do it, gives commands that reproduce the main claim, and lists what the project does not do.

## What is inside

| Path | Contents |
|---|---|
| `index.mdx` | Project list and status vocabulary |
| `status.mdx` | Dated status ledger for every project |
| `architecture/` | One page per project: MUTX, Bollard, Tablebeam, BoundaryBench, Queueglass, World Watch, Minecraft on Apple silicon, Solar Drift, Loop Courier, Terminal Starfield, ckitty |
| `recipes/` | Step-by-step reproductions of one claim each |
| `proof/` | What a build or release claim needs behind it |

The site uses the Mintlify `linden` theme, with colours and type set in `docs.json`, `style.css` and the SVG assets.

## Status vocabulary

- **Shipped**: a release or public use path exists.
- **Verified**: a reproducible check or inspectable artifact backs the claim.
- **Experiment**: real code that runs inside a deliberately limited envelope.
- **Simulated**: behaviour is mocked or emulated rather than connected to the named external system.
- **Planned**: the direction is written down and not implemented.

## Preview locally

Mintlify needs Node.js 20.17.0 or newer. The commands pin the CLI version CI uses.

```bash
npx --yes mint@4.2.723 dev
```

The preview opens at `http://localhost:3000`.

## Validate

```bash
python3 -m json.tool docs.json >/dev/null
npx --yes mint@4.2.723 validate
npx --yes mint@4.2.723 broken-links --check-anchors
npx --yes mint@4.2.723 a11y
```

The same checks run in GitHub Actions on every pull request and push to `main`. Editorial rules live in [`AGENTS.md`](AGENTS.md) and contribution requirements in [`CONTRIBUTING.md`](CONTRIBUTING.md).

Project pages were last reviewed against each repository's default branch on 23 October 2026. Update the date on a page whenever its facts change.

## Hosting

Vercel builds the site on every push to `main` with `node scripts/build-site.mjs`. The script runs `mint export`, unpacks the static site into Vercel's Build Output API layout, and turns the `redirects` in `docs.json` into routes. It also disables the export's live-reload client, which only works against `mint dev`.

## License

The documentation is licensed under the terms in [`LICENSE`](LICENSE). Linked projects keep their own licences.
