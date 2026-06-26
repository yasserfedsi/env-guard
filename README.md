# envfy

A lightweight, type-safe environment variable validator for Node.js and TypeScript.

`envfy` validates and parses environment variables at application startup, helping applications fail fast when configuration is invalid.

## Features

- String validation
- Number parsing and validation
- Boolean parsing and validation
- Enum validation
- Aggregated validation errors
- Optional environment variables
- Zero runtime dependencies
- TypeScript support

## Installation

```bash
npm install @yasserfedsi/envfy
```

## Basic Usage

```ts
import { validateEnv } from "@yasserfedsi/envfy";

const env = validateEnv({
  PORT: "number",
  DATABASE_URL: "string",
  DEBUG: "boolean",
});

console.log(env.PORT);
console.log(env.DATABASE_URL);
console.log(env.DEBUG);
```

## Enum Validation

```ts
const env = validateEnv({
  NODE_ENV: ["development", "production", "test"],
});
```

If `.env` contains:

```env
NODE_ENV=staging
```

An error is thrown:

```text
NODE_ENV must be one of: development, production, test
```

## Optional Variables

```ts
const env = validateEnv({
  API_KEY: {
    type: "string",
    optional: true,
  },
});
```

Optional variables behave as follows:

- Missing values are ignored.
- Existing values are validated normally.

## Aggregated Errors

Instead of stopping at the first validation error, envfy collects every validation error before throwing.

Example:

```env
PORT=abc
DEBUG=yes
```

```ts
validateEnv({
  PORT: "number",
  DEBUG: "boolean",
  DATABASE_URL: "string",
});
```

Produces:

```text
Environment validation failed

PORT must be a valid number
DEBUG must be true or false
Missing environment variable: DATABASE_URL
```

## Supported Schema Types

Primitive types:

```ts
"string";
"number";
"boolean";
```

Enum:

```ts
["development", "production", "test"];
```

Optional:

```ts
{
  type: "string",
  optional: true,
}
```

## Example

```env
PORT=3000
DEBUG=true
NODE_ENV=development
DATABASE_URL=postgres://localhost/db
```

```ts
import { validateEnv } from "@yasserfedsi/envfy";

const env = validateEnv({
  PORT: "number",
  DEBUG: "boolean",
  NODE_ENV: ["development", "production", "test"],
  DATABASE_URL: "string",
});

console.log(env);
```

Output:

```ts
{
  PORT: 3000,
  DEBUG: true,
  NODE_ENV: "development",
  DATABASE_URL: "postgres://localhost/db",
}
```

## API

```ts
validateEnv(schema);
```

Returns an object containing validated and parsed environment variables.

Throws `EnvValidationError` when one or more validations fail.

## Roadmap

### Completed

- String validation
- Number validation
- Boolean validation
- Enum validation
- Aggregated validation errors
- Optional environment variables

### Planned

- Default values
- Custom validators
- Improved TypeScript type inference
- Custom error formatting

## Contributing

Contributions, bug reports, feature requests, and pull requests are welcome.

Please read the contribution guidelines before submitting a pull request.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a complete history of releases.

## License

MIT License.
