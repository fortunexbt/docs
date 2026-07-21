# Fortune Field Manual agent guidance

## Mission

This repository is the public technical field manual for Fortune's projects. It explains architectures, reproducible demos, engineering principles, and the evidence behind release claims.

The editorial promise is **systems that show their work**. Every page should help a reader distinguish what exists in code, what they can reproduce, and what remains experimental.

## Source of truth

- Treat the public repositories as primary evidence. Link to the relevant repository, file, release, or workflow when making a concrete claim.
- Verify volatile claims before editing. Add a review date to lab-status pages.
- Never turn roadmap language into present-tense capability.
- Do not describe a simulated service as a production integration.
- If code and README disagree, describe the code and flag the documentation mismatch.

Use these labels consistently:

- **Shipped** — released or publicly usable through a documented path.
- **Verified** — backed by a reproducible test, deterministic fixture, or inspectable artifact.
- **Experiment** — real code whose operating or security envelope is intentionally limited.
- **Simulated** — behavior is mocked, generated, or emulated rather than connected to the claimed external system.
- **Planned** — an explicit future direction with no current implementation claim.

## Content map

- `index.mdx` and `start-here.mdx` orient first-time readers.
- `architecture/` explains the four public reference systems.
- `principles/` defines bounded, local, deterministic, and verifiable design.
- `recipes/` contains runnable, secret-minimal demonstrations.
- `proof/` defines build and release evidence.
- `labs/` documents incomplete systems with implemented-versus-simulated boundaries.

## Writing style

- Lead with the outcome or boundary.
- Use active voice and short, concrete sentences.
- Prefer verbs such as `runs`, `records`, `validates`, and `simulates` over adjectives such as “powerful” or “advanced.”
- Explain why a design choice matters after stating what the code does.
- Address the reader as “you” in recipes. Use neutral technical prose in architecture tours.
- Use sentence case for headings.
- Put commands, paths, environment variables, and code identifiers in backticks.
- Use root-relative links for internal pages and absolute links for external sources.

## Design system

The visual direction is **control room after midnight**:

- near-black background, signal cyan, governance violet, and warm amber;
- IBM Plex Mono for headings and proof labels, IBM Plex Sans for reading;
- grid, telemetry, and status-strip motifs;
- purposeful asymmetry on the landing page;
- a few strong components rather than walls of interchangeable cards.

Use Mintlify components when they improve navigation or comprehension. Purpose-built HTML wrappers are allowed for the landing hero, evidence strips, and status labels defined in `style.css`.

## MDX requirements

- Every page needs `title` and `description` frontmatter.
- Architecture and lab pages need an evidence strip near the top.
- Every runnable recipe must include prerequisites, exact commands, expected evidence, and cleanup or limits when relevant.
- Every architecture page must include boundaries and source links.
- Keep Mermaid diagrams small enough to understand without zooming.
- Do not include secrets, realistic credentials, private URLs, or internal deployment details.

## Validation

From the repository root, run:

```bash
python3 -m json.tool docs.json >/dev/null
npx --yes mint@4.2.723 validate
npx --yes mint@4.2.723 broken-links --check-anchors
npx --yes mint@4.2.723 a11y
```

If the Mintlify CLI cannot run, still validate JSON and verify that every path in `docs.json` resolves to an `.mdx` file. Report any skipped check explicitly.
