import type { UnauthorizedErrorType } from 'src/types/unauthorized-error.types'
import { ErrorHandler } from '.'

export class UnauthorizedError extends ErrorHandler {
  constructor(message: string = 'Unauthorized', type: UnauthorizedErrorType = 'UNAUTHORIZED', details?: Record<string, unknown>) {
    super(message, 401, type, details)
  }
}

export class InvalidTokenError extends UnauthorizedError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid token', 'INVALID_TOKEN', details)
  }
}

export class InvalidCredentialsError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Invalid credentials', 'INVALID_CREDENTIALS', details)
  }
}

export class AccessTokenError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Access token invalid or expired', 'ACCESS_TOKEN_INVALID', details)
  }
}

export class RefreshTokenError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Refresh token invalid or expired', 'REFRESH_TOKEN_INVALID', details)
  }
}

export class APIKeyError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Invalid API key', 'API_KEY_INVALID', details)
  }
}

export class UnauthorizedDeviceError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Unauthorized device', 'UNAUTHORIZED_DEVICE', details)
  }
}

