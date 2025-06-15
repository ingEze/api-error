import { ErrorHandler } from './error-handler'
import { ForbiddenErrorType } from 'src/types'

export class ForbiddenError extends ErrorHandler {
  constructor(message: string = 'Forbidden access', type: ForbiddenErrorType, details?: Record<string, unknown>) {
    super(message, 403, type, details)
  }
}

export class ForbiddenUserError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('User access forbidden', 'FORBIDDEN_USER', details)
  }
}

export class ForbiddenEmailError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Email access forbidden', 'FORBIDDEN_EMAIL', details)
  }
}

export class ForbiddenProductError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Product access forbidden', 'FORBIDDEN_PRODUCT', details)
  }
}

export class ForbiddenPostError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Post access forbidden', 'FORBIDDEN_POST', details)
  }
}

export class ForbiddenCommentError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Comment access forbidden', 'FORBIDDEN_COMMENT', details)
  }
}

export class ForbiddenCategoryError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Category access forbidden', 'FORBIDDEN_CATEGORY', details)
  }
}

export class ForbiddenFileError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('File access forbidden', 'FORBIDDEN_FILE', details)
  }
}

export class ForbiddenImageError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Image access forbidden', 'FORBIDDEN_IMAGE', details)
  }
}

export class ForbiddenAddressError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Address access forbidden', 'FORBIDDEN_ADDRESS', details)
  }
}
