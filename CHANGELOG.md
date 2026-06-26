# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog and the project follows Semantic Versioning.

## [0.4.0] - 2026-06-26

### Added

* Support for optional environment variables.
* New `EnvOption` schema object.
* New exported schema types.
* New `src/types` module for shared type definitions.

### Changed

* Refactored schema type definitions into a dedicated module.
* Improved internal validation flow for optional variables.
* Expanded unit test coverage.

---

## [0.3.0] - 2026-06-17

### Added

* `EnvValidationError` class.
* Aggregated validation errors.
* Multiple validation errors are now reported together.

### Changed

* Validation no longer stops after the first error.

---

## [0.2.1] - 2026-06-17

### Fixed

* Corrected npm package contents.
* Published compiled `dist` files instead of TypeScript source files.
* Improved package publishing configuration.

---

## [0.2.0] - 2026-06-15

### Added

* Enum validation support.

Example:

```ts
NODE_ENV: [
  "development",
  "production",
  "test",
]
```

---

## [0.1.0] - 2026-06-14

### Added

* Initial release.
* String validation.
* Number validation.
* Boolean validation.
* TypeScript support.
