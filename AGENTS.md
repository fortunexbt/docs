# Field Manual agent guidance

## Mission

This repository holds the public Field Manual for the projects on fortunexbt.com: how each one works, the results it has measured, and commands that reproduce them. Every page should let a reader tell what exists in code, what they can reproduce, and what remains experimental.

The author is the anonymous handle `fortunexbt`. Never add a real name, email address, location, employer or client name to any page, commit or asset.

## Source of truth

- Treat the public repositories as primary evidence. Link to the relevant repository, file, release, or workflow when making a concrete claim.
- Verify volatile claims before editing. Put a review date on every project page and in `status.mdx`.
- Never turn roadmap language into present-tense capability.
- Do not describe a simulated service as a production integration.
- If code and README disagree, describe the code and flag the documentation mismatch.

Use these labels consistently:

- **Shipped**: released or publicly usable through a documented path.
- **Verified**: backed by a reproducible test, deterministic fixture, or inspectable artifact.
- **Experiment**: real code whose operating or security envelope is intentionally limited.
- **Simulated**: behavior is mocked, generated, or emulated rather than connected to the claimed external system.
- **Planned**: an explicit future direction with no current implementation claim.

## Content map

- `index.mdx` lists every project, grouped as on fortunexbt.com, with its status label and a one-line description.
- `status.mdx` is the dated ledger: status, strongest proof and open gap per project.
- `architecture/` has one page per project featured on fortunexbt.com.
- `recipes/` contains runnable, secret-minimal reproductions of one claim each.
- `proof/` defines build and release evidence.

When a project leaves the portfolio, delete its page and add a redirect in `docs.json`.

## Writing style

- Lead with the outcome or boundary.
- Use active voice and short, concrete sentences.
- Prefer verbs such as `runs`, `records`, `validates`, and `simulates` over adjectives such as “powerful” or “advanced.”
- Explain why a design choice matters after stating what the code does.
- Address the reader as “you” in recipes. Use neutral technical prose in architecture tours.
- Use sentence case for headings.
- No umbrella or thesis framing. Describe each project by what it does and what it has measured.
- Put commands, paths, environment variables, and code identifiers in backticks.
- Use root-relative links for internal pages and absolute links for external sources.

## Design system

Black and white, matching fortunexbt.com. Pure black (`#000`) in dark mode and paper (`#F3F3F1`) in light mode. The frame teal (`#3DD6C0` in dark mode, `#0A6B5F` in light mode) is the only interface colour and marks links and the current page. The yellow-to-red lens gradient appears only in the logo and favicon. Archivo throughout, condensed (`font-stretch: 62%`) and heavy for headings and project names, normal width for reading.

Custom HTML is limited to the evidence strip and the home page index, both styled in `style.css`. Do not add stat strips, all-caps labels, gradient washes, card grids or arrows on link text. When a project joins the portfolio, add its row to the index in `index.mdx`, its page to `docs.json` under the same group, and its row to `status.mdx`.

## MDX requirements

- Every page needs `title` and `description` frontmatter.
- Project pages need an evidence strip near the top.
- Every runnable recipe must include prerequisites, exact commands, expected evidence, and cleanup or limits when relevant.
- Every project page must include a `Limits` section and source links.
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
