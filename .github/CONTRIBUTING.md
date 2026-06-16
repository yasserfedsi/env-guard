# CONTRIBUTING GUIDELINES

Thank you for contributing! To keep the project maintainable and professional, please follow these standards.

---

## Branching Strategy

- `main` is the stable branch.
- Feature branches: `feature/<short-description>`
- Bugfix branches: `bugfix/<short-description>`
- Do **not** commit directly to `main`.

---

## Commit Messages

Follow the **Conventional Commits** style:

```
<type>(<scope>): <subject>
```

**Common types:**

- `feat` – new feature
- `fix` – bug fix
- `docs` – documentation only
- `refactor` – code changes without changing behavior
- `test` – adding or modifying tests

**Example:**

```
feat(validation): add enum validation
```

**Tips:**

- `<scope>` is optional but recommended (e.g., `validation`, `schema`, `types`).
- Keep `<subject>` concise (max 72 characters).
- Use the imperative mood: "Add feature" not "Added feature".

---

## Pull Requests

- PRs should target the `main` branch.
- Include a clear **title** and **description**.
- Reference related issues using `Fixes #<issue_number>` when applicable.
- Assign reviewers who are familiar with the code.
- Ensure all tests pass before requesting review.

---

## Testing

- Include **unit** and **integration tests** for new features or bug fixes.
- Tests must pass consistently before merging.
- If adding database changes, include relevant migrations in the PR.

---

## Documentation

- Update documentation for new features or changes.
- Keep explanations **clear and concise**.
- Include examples if applicable.

---

Following these guidelines ensures a smooth review process and maintains the quality of the project.
