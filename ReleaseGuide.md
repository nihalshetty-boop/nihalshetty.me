# Conventional Commit Guidelines
These commit prefixes enable automated semantic versioning and changelog generation.

---

## Commit Prefixes and Their Effects

| Prefix              | Description                                   | Version Bump          |
|---------------------|-----------------------------------------------|------------------------|
| `feat:`             | New feature added                             | **Minor** (`1.x.0`)    |
| `fix:`              | Bug fix or patch                              | **Patch** (`1.0.x`)    |
| `chore:`            | Routine task (e.g., build, deps)              | None (unless configured) |
| `docs:`             | Documentation-only changes                    | None                   |
| `refactor:`         | Code change that doesn’t fix/add features     | None (unless configured) |
| `style:`            | Formatting, whitespace, etc.                  | None                   |
| `test:`             | Adding or refactoring tests                   | None                   |
| `perf:`             | Performance improvements                      | **Patch** (`1.0.x`)    |
| `BREAKING CHANGE:`  | Backward-incompatible change (in commit body) | **Major** (`x.0.0`)    |

---

Tips
Always prefix commits with feat:, fix:, etc., for versioning to work.

Use default_bump: patch in your GitHub Action if unsure or inconsistent.

Use BREAKING CHANGE: only when your update would break previous functionality or contracts.

---

## Breaking Changes Example

To trigger a **major version bump**, include `BREAKING CHANGE:` in the commit body:

```bash
git commit -m "refactor: switch auth flow

BREAKING CHANGE: auth endpoint now uses JWT"
