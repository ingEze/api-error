/**
 * Defines custom error classes for handling various validation error scenarios (HTTP 422).
 *
 * Each class extends `ValidationError`, which itself extends `ErrorHandler`.
 * These errors represent specific validation failures and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/validation-error
 */

import { ErrorHandler } from './error-handler'
import { ValidationErrorType } from 'src/types'

/**
 * Represents a generic validation error (HTTP 422).
 *
 * @extends ErrorHandler
 */
export class ValidationError extends ErrorHandler {
  /**
   * Creates a new ValidationError instance.
   *
   * @param {string} [message='Validation error'] Error message.
   * @param {ValidationErrorType} [type='VALIDATION'] Specific validation error type.
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(message: string = 'Validation error', type: ValidationErrorType = 'VALIDATION', details?: Record<string, unknown>) {
    super(message, 422, type, details)
  }
}

/**
 * Error for user validation failure.
 *
 * @extends ValidationError
 */
export class ValidationUserError extends ValidationError {
  /**
   * Creates a new ValidationUserError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('User validation failed', 'VALIDATION_USER', details)
  }
}

/**
 * Error for email validation failure.
 *
 * @extends ValidationError
 */
export class ValidationEmailError extends ValidationError {
  /**
   * Creates a new ValidationEmailError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Email validation failed', 'VALIDATION_EMAIL', details)
  }
}

/**
 * Error for product validation failure.
 *
 * @extends ValidationError
 */
export class ValidationProductError extends ValidationError {
  /**
   * Creates a new ValidationProductError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Product validation failed', 'VALIDATION_PRODUCT', details)
  }
}

/**
 * Error for post validation failure.
 *
 * @extends ValidationError
 */
export class ValidationPostError extends ValidationError {
  /**
   * Creates a new ValidationPostError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Post validation failed', 'VALIDATION_POST', details)
  }
}

/**
 * Error for comment validation failure.
 *
 * @extends ValidationError
 */
export class ValidationCommentError extends ValidationError {
  /**
   * Creates a new ValidationCommentError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Comment validation failed', 'VALIDATION_COMMENT', details)
  }
}

/**
 * Error for category validation failure.
 *
 * @extends ValidationError
 */
export class ValidationCategoryError extends ValidationError {
  /**
   * Creates a new ValidationCategoryError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Category validation failed', 'VALIDATION_CATEGORY', details)
  }
}

/**
 * Error for file validation failure.
 *
 * @extends ValidationError
 */
export class ValidationFileError extends ValidationError {
  /**
   * Creates a new ValidationFileError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('File validation failed', 'VALIDATION_FILE', details)
  }
}

/**
 * Error for image validation failure.
 *
 * @extends ValidationError
 */
export class ValidationImageError extends ValidationError {
  /**
   * Creates a new ValidationImageError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Image validation failed', 'VALIDATION_IMAGE', details)
  }
}

/**
 * Error for address validation failure.
 *
 * @extends ValidationError
 */
export class ValidationAddressError extends ValidationError {
  /**
   * Creates a new ValidationAddressError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Address validation failed', 'VALIDATION_ADDRESS', details)
  }
}
