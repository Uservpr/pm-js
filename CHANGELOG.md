# Changelog

All significant changes to this project will be documented in this file.

## [1.1.1] - (2025-03-10)

### Fixed
- Fixed CLI execution issue causing Failed transaction (2147483646) error.
- Improved error handling in CLI mode.
- Updated documentation for better clarity.

## [1.1.0] - (2025-02-08)

### Added
- CLI mode to execute HTTP requests directly from the terminal.
- Support for CLI commands:
  - `pm -help`
  - `pm -get <url>`
  - `pm -post <url> -d '{ key: value }'`
  - `pm -put <url> -d '{ key: value }'`
  - `pm -del <url>`
- Feature to save response results to a JSON file using `-s <file.json>` or `-save <file.json>`.
- Response output is now more organized (pretty response).

### Changed
- Documentation language changed from Indonesian to English.

## [1.0.2] - (2025-02-09)

### Fixed
- Improved stability of all request functions.

## [1.0.0] - (2025-02-10)

### Added
- Basic CRUD (Create, Read, Update, Delete) functions with methods:
  - `get`
  - `post`
  - `put`
  - `delete`

---