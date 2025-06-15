import type { NotFoundErrorType } from 'src/types/not-found-error.types'
import { ErrorHandler } from './error-handler'

export class NotFoundError extends ErrorHandler {
  constructor(message: string = 'Resource not found', type: NotFoundErrorType = 'NOT_FOUND', details?: Record<string, unknown>) {
    super(message, 404, type, details)
  }
}

export class UserNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('User not found', 'NOT_FOUND_USER', details)
  }
}

export class EmailNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Email not found', 'NOT_FOUND_EMAIL', details)
  }
}

export class ProductNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Product not found', 'NOT_FOUND_PRODUCT', details)
  }
}

export class PostNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Post not found', 'NOT_FOUND_POST', details)
  }
}

export class CommentNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Comment not found', 'NOT_FOUND_COMMENT', details)
  }
}

export class CategoryNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Category not found', 'NOT_FOUND_CATEGORY', details)
  }
}

export class FileNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('File not found', 'NOT_FOUND_FILE', details)
  }
}

export class ImageNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Image not found', 'NOT_FOUND_IMAGE', details)
  }
}

export class AddressNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Address not found', 'NOT_FOUND_ADDRESS', details)
  }
}
