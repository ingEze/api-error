# @ingeze/api-error
Add commentMore actions
[![CI](https://github.com/ingeze/api-error/actions/workflows/nodejs.yml/badge.svg)](https://github.com/ingeze/api-error/actions/workflows/nodejs.yml)
[![npm version](https://img.shields.io/npm/v/@ingeze/api-error)](https://www.npmjs.com/package/@ingeze/api-error)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive TypeScript library for **consistent HTTP error handling** across Express, NestJS, and Fastify APIs. Built with developer experience in mind, providing type-safe error classes and framework-specific middleware for seamless API error management.

## ✨ Features

- 🎯 **Pre-built error classes** for common HTTP status codes (400, 401, 403, 404, 422, etc.)
- 🔧 **Framework integrations** - Ready-to-use middleware for Express, NestJS, and Fastify
- 🛡️ **Type-safe** - Full TypeScript support with detailed error types
- 📦 **Consistent responses** - Standardized error response format across your API
- 🎨 **Customizable** - Optional details object for additional error context
- 🏗️ **Extensible** - Create custom error classes with the factory function
- 📝 **Well-tested** - Every function and class is thoroughly tested

## 📦 Installation

```bash
npm install @ingeze/api-error
```

```bash
yarn add @ingeze/api-error
```

```bash
pnpm add @ingeze/api-error
```

## 📦 Subpath Exports

This package uses [subpath exports](https://nodejs.org/api/packages.html#subpath-exports) to expose integrations for different frameworks (Express, Nest, Fastify, etc.).

### Example usage

```ts
import { expressErrorMiddleware } from '@ingeze/api-error/express'
// or
import { NestErrorFilter, NestGenericErrorFilter } from '@ingeze/api-error/nest'
// or
import { fastifyErrorMiddleware } from '@ingeze/api-error/fastify'
```
> This lets you import only what you need, without loading unnecessary code.

### ⚠️ Required TypeScript Configuration
To make TypeScript properly recognize subpath exports (like @ingeze/api-error/express), you must use a modern module resolution strategy.

Make sure your tsconfig.json includes:
```tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node16", // or "nodenext" if using ESM
    "module": "esnext",           // or "commonjs" if using require
    "target": "es2020",
    "esModuleInterop": true
  }
}
```
> Starting from TypeScript 4.7+, *node16* and *nodenext* support the *exports* field in *package.json*.

### ✅ Minimum Requirements
- Node.js ≥ 16
- TypeScript ≥ 4.7
- Modern bundlers like esbuild, tsup, vite, etc.

## 🚀 Quick Start

### Basic Usage

```typescript
import { BadRequestError, NotFoundError } from '@ingeze/api-error'

// Simple error throwing
throw new BadRequestError()

// With custom details
throw new NotFoundError({ 
  resource: 'user', 
  id: '12345' 
})

// Response format:
{
  "success": false,
  "type": "NOT_FOUND",
  "statusCode": 404,
  "message": "Resource not found",
  "details": {
    "resource": "Mail",
    "id": "12345"
  }
}
```

### Express Integration

```typescript
import express from 'express'
import { expressErrorMiddleware } from '@ingeze/api-error/express'
import { UserNotFoundError } from '@ingeze/api-error'

const app = express()

// Your routes
app.get('/users/:id', async (req, res) => {
  const user = await findUser(req.params.id)
  if (!user) {
    throw new UserNotFoundError({ userId: req.params.id })
  }
  res.json(user)
})

// Error handling middleware (must be last)
app.use(expressErrorMiddleware)
```

### NestJS Integration

```typescript
import { Module } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'
import { NestErrorFilter, NestGenericErrorFilter } from '@ingeze/api-error/nest'

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: NestErrorFilter,
    },
    {
      provide: APP_FILTER,
      useClass: NestGenericErrorFilter,
    },
  ],
})
export class AppModule {}
```

### Fastify Integration

```typescript
import fastify from 'fastify'
import { fastifyErrorMiddleware } from '@ingeze/api-error/fastify'

const app = fastify()

// Set the error handler
app.setErrorHandler(fastifyErrorMiddleware)
```

## 📚 Available Error Classes

### 🔴 Bad Request Errors (400)
```typescript
import {
  BadRequestError,
  InvalidUserDataError,
  InvalidEmailError,
  InvalidProductDataError,
  InvalidPostData,
  InvalidCommentDataError,
  InvalidCategoryDataError,
  InvalidFileError,
  InvalidImageError,
  InvalidAddressError
} from '@ingeze/api-error'
```

### 🔐 Unauthorized Errors (401)
```typescript
import {
  UnauthorizedError,
  InvalidTokenError,
  InvalidCredentialsError,
  AccessTokenError,
  RefreshTokenError,
  APIKeyError,
  UnauthorizedDeviceError
} from '@ingeze/api-error'
```

### 🚫 Forbidden Errors (403)
```typescript
import {
  ForbiddenError,
  ForbiddenUserError,
  ForbiddenEmailError,
  ForbiddenProductError,
  ForbiddenPostError,
  ForbiddenCommentError,
  ForbiddenCategoryError,
  ForbiddenFileError,
  ForbiddenImageError,
  ForbiddenAddressError
} from '@ingeze/api-error'
```

### 🔍 Not Found Errors (404)
```typescript
import {
  NotFoundError,
  UserNotFoundError,
  EmailNotFoundError,
  ProductNotFoundError,
  PostNotFoundError,
  CommentNotFoundError,
  CategoryNotFoundError,
  FileNotFoundError,
  ImageNotFoundError,
  AddressNotFoundError
} from '@ingeze/api-error'
```

### ✅ Validation Errors (422)
```typescript
import {
  ValidationError,
  ValidationUserError,
  ValidationEmailError,
  ValidationProductError,
  ValidationPostError,
  ValidationCommentError,
  ValidationCategoryError,
  ValidationFileError,
  ValidationImageError,
  ValidationAddressError
} from '@ingeze/api-error'
```

## 🎨 Custom Error Creation

Create your own error classes with the factory function:

```typescript
import { createHandleError } from '@ingeze/api-error'

// Define error types
type PaymentErrorType = 'PAYMENT_FAILED' | 'PAYMENT_DECLINED' | 'INSUFFICIENT_FUNDS'

// Create custom error class
const PaymentError = createHandleError<PaymentErrorType>({
  name: 'PaymentError',
  statusCode: 402,
  defaultType: 'PAYMENT_FAILED',
  defaultMessage: 'Payment could not be processed'
})

// Usage
throw new PaymentError()
throw new PaymentError('Card declined', 'PAYMENT_DECLINED', { 
  cardLast4: '4242',
  retryAllowed: false 
})
```

## 🔧 Advanced Usage

### Custom Error Handler

```typescript
import { ErrorHandler } from '@ingeze/api-error'

throw new ErrorHandler(
  'Custom error message',
  418, // I'm a teapot
  'CUSTOM_TYPE',
  { customField: 'value' }
)
```

### Error Response Format

All errors follow this consistent structure:

```typescript
interface ErrorResponse {
  success: boolean      // Always false
  type: string         // Error type identifier
  statusCode: number   // HTTP status code
  message: string      // Human-readable message
  details?: object     // Optional additional context
}
```

## 🏗️ Framework-Specific Examples

### Express with Async/Await

```typescript
import express from 'express'
import { UserNotFoundError, ValidationUserError } from '@ingeze/api-error'
import { expressErrorMiddleware } from '@ingeze/api-error/express'

const app = express()

app.post('/users', async (req, res) => {
  const { email, name } = req.body

  // Validate required fields
  const missing = [];

  if (!email) missing.push("Email can't be empty");
  if (!name) missing.push("Name can't be empty");

  if (missing.length) {
    throw new ValidationUserError({ missing: missing.join('. '), missing });
  }
  
  // Check if user already exists
  const existingUser = await findUserByEmail(email)
  if (existingUser) {
    throw new ValidationUserError({ 
      field: 'email', 
      reason: 'already exists' 
    })
  }

  // Create and return the new user
  const user = await createUser({ email, name })
  res.status(201).json(user)
})

// Global error handler
app.use(expressErrorMiddleware)
```

### NestJS Service

```typescript
import { Injectable } from '@nestjs/common'
import { UserNotFoundError, ValidationUserError } from '@ingeze/api-error'

@Injectable()
export class UserService {
  async findUser(id: string) {
    const user = await this.userRepository.findById(id)
    
    if (!user) {
      throw new UserNotFoundError({ userId: id })
    }
    
    return user
  }

  async updateUser(id: string, data: UpdateUserDto) {
    if (!data.email && !data.name) {
      throw new ValidationUserError({ 
        message: 'At least one field must be provided' 
      })
    }

    const user = await this.findUser(id) // Will throw if not found
    return this.userRepository.update(id, data)
  }
}
```

## 🧪 Testing

The library is thoroughly tested with comprehensive test coverage:

```bash
npm test
```

## Changelog

For a detailed list of changes and version history, please see the [Changelog](./CHANGELOG.md) file.

This project follows [Semantic Versioning](https://semver.org/) and documents all notable updates in the changelog to help you stay informed about new features, fixes, and improvements.


## 📄 License

MIT © [ingEze](https://github.com/ingEze)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

- 🐛 [Report bugs](https://github.com/ingeze/api-error/issues)  
- 💡 [Request features](https://github.com/ingeze/api-error/issues)  
- 🖥 [Documentation Web](https://ingeze.github.io/api-error)  
- 👉 [Documentation DeepWiki](https://deepwiki.com/ingEze/api-error)  
- 📖 [Documentation](https://github.com/ingeze/api-error#readme)  

### 📬 Contact Me

- 📧 **Email**: [ezequielrodrigosaucedo@gmail.com](mailto:ezequielrodrigosaucedo@gmail.com)  
- 💼 **LinkedIn**: [linkedin.com/in/ezequiel-rodrigo-saucedo](https://www.linkedin.com/in/ezequiel-rodrigo-saucedo-50451a294)  

---

**Built with ❤️ by the Ingeze**
