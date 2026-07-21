# Fortune Field Manual

Architecture tours, reproducible demos, and release evidence for **systems that show their work**.

The Field Manual is the technical depth layer behind Fortune's public projects. It documents what the code does, where the trust boundary sits, how to reproduce the flagship claim, and what remains experimental.

## What is inside

| Section | Purpose |
|---|---|
| `architecture/` | Tours of MUTX, Tablebeam, Terminal Starfield, and ckitty |
| `principles/` | Bounded, local, deterministic, and verifiable design |
| `recipes/` | Secret-minimal demos with stable inputs and inspectable evidence |
| `proof/` | Build and release proof philosophy |
| `labs/` | Dated implemented-versus-simulated ledgers for Barter and SecurePath |

The site uses the Mintlify `linden` theme with a project-specific “control room after midnight” visual system in `docs.json`, `style.css`, and the custom SVG assets.

## Status vocabulary

- **Shipped** — a release or public use path exists.
- **Verified** — a reproducible check or inspectable artifact backs the claim.
- **Experiment** — real code operates inside a deliberately limited envelope.
- **Simulated** — behavior is mocked or emulated rather than connected to the named external system.
- **Planned** — the direction is explicit and not implemented.

These terms are editorial constraints. Do not replace them with broader marketing language.

## Preview locally

Mintlify requires Node.js 20.17.0 or newer. The commands pin the CLI version used by CI.

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

The same proof gate runs in GitHub Actions on every pull request and push to `main`.

The repository-specific editorial and design rules live in [`AGENTS.md`](AGENTS.md). Contribution requirements live in [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Primary evidence

- [MUTX](https://github.com/mutx-dev/mutx-dev)
- [Tablebeam](https://github.com/fortunexbt/tablebeam)
- [Terminal Starfield](https://github.com/fortunexbt/terminal-starfield)
- [ckitty](https://github.com/fortunexbt/ckitty)
- [Barter](https://github.com/fortunexbt/barter)
- [SecurePath](https://github.com/fortunexbt/securepath)

Lab status was reviewed against public default branches on 21 July 2026. Update the date whenever the implementation boundary changes.

## License

The documentation repository is licensed under the terms in [`LICENSE`](LICENSE). Linked projects retain their own licenses.
