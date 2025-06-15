import { BadRequestErrorType } from 'src/types/bad-request-error.types'
import { ErrorHandler } from './error-handler'

export class BadRequestError extends ErrorHandler {
  constructor(message: string = 'Bad request.', type: BadRequestErrorType = 'BAD_REQUEST', details?: Record<string, unknown>) {
    super(message, 400, type, details)
  }
}

export class InvalidUserDataError extends BadRequestError {
  constructor(details?: Record<string, unknown>) {
    super('Missing required user information in the request.', 'INVALID_USER_DATA', details)
  }
}

export class InvalidEmailError extends BadRequestError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid email format or missing email field.', 'INVALID_EMAIL', details)
  }
}

export class InvalidProductDataError extends BadRequestError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing product details.', 'INVALID_PRODUCT_DATA', details)
  }
}

export class InvalidPostData extends BadRequestError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing post data.', 'INVALID_POST_DATA', details)
  }
}

export class InvalidCommentDataError extends BadRequestError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing comment data.', 'INVALID_COMMENT_DATA', details)
  }
}

export class InvalidCategoryDataError extends BadRequestError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing category information.', 'INVALID_CATEGORY_DATA', details)
  }
}

export class InvalidFileError extends BadRequestError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing file in the request.', 'INVALID_FILE', details)
  }
}

export class InvalidImageError extends BadRequestError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing image data', 'INVALID_IMAGE', details)
  }
}

export class InvalidAddressError extends BadRequestError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing address information.', 'INVALID_ADDRESS', details)
  }
}
