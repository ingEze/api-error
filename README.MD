# @ingeze/api-error

[![CI](https://github.com/ingeze/api-error/actions/workflows/nodejs.yml/badge.svg)](https://github.com/ingeze/api-error/actions/workflows/nodejs.yml)


A TypeScript library for consistent HTTP error handling in Express, NestJS, and Fastify APIs.

## Features

- Typed error classes for common HTTP errors (400, 401, 403, 404, 422, etc.)
- Ready-to-use error handler middleware for Express and NestJS
- Customizable error responses with optional details
- Simple, extensible, and framework-agnostic

## Installation

```bash
npm install @ingeze/api-error
```

## Usage

### Throwing Errors

Use the provided error classes for standard API errors.  
You **do not** need to pass a message or type—just instantiate the error, optionally passing a `details` object.

```ts
import { BadRequestError } from '@ingeze/api-error'

throw new BadRequestError({ field: 'email', reason: 'Invalid format' })
```

**Response:**
```json
{
  "success": false,
  "type": "INVALID_EMAIL",
  "statusCode": 400,
  "message": "Invalid email format or missing email field.",
  "details": {
    "field": "email",
    "reason": "Invalid format"
  }
}
```

If you want a fully custom error, use `ErrorHandler` directly:

```ts
import { ErrorHandler } from '@ingeze/api-error'

throw new ErrorHandler('Custom error message', 418, 'CUSTOM_TYPE', { extra: 'info' })
```

### Express Middleware

```ts
import { expressHandlerMiddleware } from '@ingeze/api-error/handler/express'

app.use(expressHandlerMiddleware)
```

### NestJS Filter

```ts
import { ErrorHandlerFilter } from '@ingeze/api-error/handler/nest'

@Module({
  providers: [{ provide: APP_FILTER, useClass: ErrorHandlerFilter }]
})
export class AppModule {}
```

## Error Types

- `BadRequestError` (400)
- `UnauthorizedError` (401)
- `ForbiddenError` (403)
- `NotFoundError` (404)
- `ValidationError` (422)
- ...and more specific subclasses

## License

MIT