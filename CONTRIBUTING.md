# Contribute to the Fortune Field Manual

Contributions should make a claim easier to inspect, reproduce, or correctly limit.

Useful changes include:

- correcting a source-backed architecture detail;
- adding a smaller or more reliable demo recipe;
- linking a claim to a release, workflow, test, or source file;
- updating a lab boundary after code changes;
- documenting a failure mode or unsupported environment;
- improving navigation, accessibility, or mobile readability.

## Evidence requirement

For every concrete capability change:

1. Link the public repository, file, release, or workflow that supports it.
2. State whether the capability is **shipped**, **verified**, **experiment**, **simulated**, or **planned**.
3. Include a review date when changing a lab page.
4. Keep unsupported assumptions and external services visible.

If a README and implementation disagree, describe the implementation and note the mismatch. Do not silently promote roadmap text into present tense.

## Local workflow

1. Fork and clone the repository.
2. Use Node.js 20.17.0 or newer.
3. Run `npx --yes mint@4.2.723 dev` from the repository root.
4. Edit the relevant MDX page and update `docs.json` only when navigation changes.
5. Run the checks below before opening a pull request.

```bash
python3 -m json.tool docs.json >/dev/null
npx --yes mint@4.2.723 validate
npx --yes mint@4.2.723 broken-links --check-anchors
npx --yes mint@4.2.723 a11y
```

## Writing rules

- Lead with the outcome or boundary.
- Use active voice and sentence-case headings.
- Prefer concrete verbs over performance adjectives.
- Put paths, commands, identifiers, and environment variables in backticks.
- Use root-relative internal links and full external URLs.
- Add `title` and `description` frontmatter to every MDX page.
- Include prerequisites, expected evidence, and limits in every recipe.
- Never include credentials, customer data, or private infrastructure details.

## Visual rules

Preserve the “control room after midnight” system:

- signal cyan for inspectable state;
- governance violet for control and policy;
- warm amber for lab warnings;
- IBM Plex Mono for headings and proof labels;
- restrained grids, telemetry strips, and status markers.

Use Mintlify components for normal documentation structure. Reuse the project classes in `style.css` for hero and evidence treatments instead of introducing one-off visual patterns.

## Pull request checklist

- [ ] Every new page is present in `docs.json` or intentionally unlisted.
- [ ] Internal links resolve.
- [ ] External claims link to primary evidence.
- [ ] Implemented, simulated, and planned behavior remain distinct.
- [ ] Commands are safe to copy and use realistic values.
- [ ] Images and diagrams have useful text alternatives or surrounding explanation.
- [ ] JSON, Mintlify validation, broken-link, and accessibility checks pass—or skipped checks are explained.
