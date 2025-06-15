import { ErrorHandler } from './error-handler'
import { ValidationErrorType } from 'src/types'

export class ValidationError extends ErrorHandler {
  constructor(message: string = 'Validation error', type: ValidationErrorType = 'VALIDATION', details?: Record<string, unknown>) {
    super(message, 422, type, details)
  }
}

export class ValidationUserError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('User validation failed', 'VALIDATION_USER', details)
  }
}

export class ValidationEmailError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Email validation failed', 'VALIDATION_EMAIL', details)
  }
}

export class ValidationProductError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Product validation failed', 'VALIDATION_PRODUCT', details)
  }
}

export class ValidationPostError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Post validation failed', 'VALIDATION_POST', details)
  }
}

export class ValidationCommentError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Comment validation failed', 'VALIDATION_COMMENT', details)
  }
}

export class ValidationCategoryError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Category validation failed', 'VALIDATION_CATEGORY', details)
  }
}

export class ValidationFileError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('File validation failed', 'VALIDATION_FILE', details)
  }
}

export class ValidationImageError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Image validation failed', 'VALIDATION_IMAGE', details)
  }
}

export class ValidationAddressError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Address validation failed', 'VALIDATION_ADDRESS', details)
  }
}
