# Changelog

Thank you for using and supporting `@ingeze/api-error`!
We appreciate your feedback and contributions to help make this library better.

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org).

---

## [1.1.0] - 2025-06-26

### Added
- Support for handling Zod validation errors without adding `zod` as a dependency.
- Now `expressErrorMiddleware` detects errors with `err.name === 'ZodError'` and maps `.issues` into a user-friendly message via `ValidationError`.

### Changed
- Internally maps unknown keys (e.g., `"unrecognized_keys"`) to readable messages like `"Unexpected fields: field1, field2"`.

### Notes
- No new dependencies added.
- Compatible with projects not using Zod — auto-detection is based on the error's `.name` and `.issues` shape.


## [1.0.7] - 2025-06-21
### Added
- Improved documentation for all error classes.
- Added clear examples of JSON responses including the `details` field.

## [1.0.6] (and previous patch versions) - 2025-06-20
### Fixed
- Multiple patches addressing Node.js subpath export issues in `package.json`:
  - Corrected export paths for `"."`, `"./express"`, `"./nest"`, and `"./fastify"`.
  - Ensured proper typing and module resolution.
- These fixes were released incrementally from 1.0.1 to 1.0.6 on the same day.

## [1.0.0] - 2025-06-14
### Initial Release
- First stable release of `@ingeze/api-error` with:
  - Pre-built error classes for HTTP errors (400, 401, 403, 404, 422)
  - Express, NestJS, and Fastify integrations
  - Standardized JSON error responses
  - Full TypeScript support
