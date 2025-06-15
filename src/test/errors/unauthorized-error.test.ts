import { ErrorHandler } from 'src/errors/error-handler'
import {
  UnauthorizedError,
  InvalidTokenError,
  InvalidCredentialsError,
  AccessTokenError,
  RefreshTokenError,
  APIKeyError,
  UnauthorizedDeviceError
} from 'src/errors/unauthorized-error'

describe('UnauthorizedError', () => {
  it('should be instance of ErrorHandler with default message', () => {
    const error = new UnauthorizedError()
    expect(error).toBeInstanceOf(ErrorHandler)
    expect(error.statusCode).toBe(401)
    expect(error.type).toBe('UNAUTHORIZED')
    expect(error.message).toBe('Unauthorized')
  })

  it('should accept custom message and details', () => {
    const details = { field: 'token' }
    const error = new UnauthorizedError('Custom unauthorized', 'UNAUTHORIZED', details)
    expect(error.message).toBe('Custom unauthorized')
    expect(error.details).toEqual(details)
  })
})

describe('InvalidTokenError', () => {
  it('should have correct type and message', () => {
    const error = new InvalidTokenError()
    expect(error.type).toBe('INVALID_TOKEN')
    expect(error.message).toBe('Invalid token')
    expect(error.statusCode).toBe(401)
  })
})

describe('InvalidCredentialsError', () => {
  it('should have correct type and message', () => {
    const details = { reason: 'wrong_password' }
    const error = new InvalidCredentialsError(details)
    expect(error.type).toBe('INVALID_CREDENTIALS')
    expect(error.message).toBe('Invalid credentials')
    expect(error.statusCode).toBe(401)
    expect(error.details).toEqual(details)
  })
})

describe('AccessTokenError', () => {
  it('should have correct type and message', () => {
    const details = { expired: true }
    const error = new AccessTokenError(details)
    expect(error.type).toBe('ACCESS_TOKEN_INVALID')
    expect(error.message).toBe('Access token invalid or expired')
    expect(error.statusCode).toBe(401)
    expect(error.details).toEqual(details)
  })
})

describe('RefreshTokenError', () => {
  it('should have correct type and message', () => {
    const details = { expired: true }
    const error = new RefreshTokenError(details)
    expect(error.type).toBe('REFRESH_TOKEN_INVALID')
    expect(error.message).toBe('Refresh token invalid or expired')
    expect(error.statusCode).toBe(401)
    expect(error.details).toEqual(details)
  })
})

describe('APIKeyError', () => {
  it('should have correct type and message', () => {
    const details = { key: 'abc123' }
    const error = new APIKeyError(details)
    expect(error.type).toBe('API_KEY_INVALID')
    expect(error.message).toBe('Invalid API key')
    expect(error.statusCode).toBe(401)
    expect(error.details).toEqual(details)
  })
})

describe('UnauthorizedDeviceError', () => {
  it('should have correct type and message', () => {
    const details = { device: 'mobile' }
    const error = new UnauthorizedDeviceError(details)
    expect(error.type).toBe('UNAUTHORIZED_DEVICE')
    expect(error.message).toBe('Unauthorized device')
    expect(error.statusCode).toBe(401)
    expect(error.details).toEqual(details)
  })
})
