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
} from 'src/errors/bad-request-error'
import { ErrorHandler } from 'src/errors/error-handler'

describe('BadRequestError', () => {
  it('should be instance of ErrorHandler with default message', () => {
    const error = new BadRequestError()
    expect(error).toBeInstanceOf(ErrorHandler)
    expect(error.statusCode).toBe(400)
    expect(error.type).toBe('BAD_REQUEST')
    expect(error.message).toBe('Bad request.')
  })

  it('should accept custom message and details', () => {
    const details = { field: 'email' }
    const error = new BadRequestError('Custom bad request', 'BAD_REQUEST', details)
    expect(error.message).toBe('Custom bad request')
    expect(error.details).toEqual(details)
  })
})

describe('InvalidUserDataError', () => {
  it('should have correct type and message', () => {
    const error = new InvalidUserDataError()

    expect(error.type).toBe('INVALID_USER_DATA')
    expect(error.message).toBe('Missing required user information in the request.')
    expect(error.statusCode).toBe(400)
  })
})

describe('InvalidEmailError', () => {
  it('should have correct type and message', () => {
    const error = new InvalidEmailError()
    expect(error.type).toBe('INVALID_EMAIL')
    expect(error.message).toBe('Invalid email format or missing email field.')
    expect(error.statusCode).toBe(400)
  })
})

describe('InvalidProductDataError', () => {
  it('should have correct type and message', () => {
    const error = new InvalidProductDataError()
    expect(error.type).toBe('INVALID_PRODUCT_DATA')
    expect(error.message).toBe('Invalid or missing product details.')
    expect(error.statusCode).toBe(400)
  })
})

describe('InvalidPostData', () => {
  it('should have correct type and message', () => {
    const error = new InvalidPostData()
    expect(error.type).toBe('INVALID_POST_DATA')
    expect(error.message).toBe('Invalid or missing post data.')
    expect(error.statusCode).toBe(400)
  })
})

describe('InvalidCommentDataError', () => {
  it('should have correct type and message', () => {
    const error = new InvalidCommentDataError()
    expect(error.type).toBe('INVALID_COMMENT_DATA')
    expect(error.message).toBe('Invalid or missing comment data.')
    expect(error.statusCode).toBe(400)
  })
})

describe('InvalidCategoryDataError', () => {
  it('should have correct type and message', () => {
    const error = new InvalidCategoryDataError()
    expect(error.type).toBe('INVALID_CATEGORY_DATA')
    expect(error.message).toBe('Invalid or missing category information.')
    expect(error.statusCode).toBe(400)
  })
})

describe('InvalidFileError', () => {
  it('should have correct type and message', () => {
    const error = new InvalidFileError()
    expect(error.type).toBe('INVALID_FILE')
    expect(error.message).toBe('Invalid or missing file in the request.')
    expect(error.statusCode).toBe(400)
  })
})

describe('InvalidImageError', () => {
  it('should have correct type and message', () => {
    const error = new InvalidImageError()
    expect(error.type).toBe('INVALID_IMAGE')
    expect(error.message).toBe('Invalid or missing image data')
    expect(error.statusCode).toBe(400)
  })
})

describe('InvalidAddressError', () => {
  it('should have correct type and message', () => {
    const error = new InvalidAddressError()
    expect(error.type).toBe('INVALID_ADDRESS')
    expect(error.message).toBe('Invalid or missing address information.')
    expect(error.statusCode).toBe(400)
  })
})
