import { ErrorHandler } from 'src/errors/error-handler'
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
} from 'src/errors/not-found-error'

describe('NotFoundError', () => {
  it('should be instance of ErrorHandler with default message', () => {
    const error = new NotFoundError()
    expect(error).toBeInstanceOf(ErrorHandler)
    expect(error.statusCode).toBe(404)
    expect(error.type).toBe('NOT_FOUND')
    expect(error.message).toBe('Resource not found')
  })

  it('should accept custom message and details', () => {
    const details = { resource: 'custom' }
    const error = new NotFoundError('Custom not found', 'NOT_FOUND', details)
    expect(error.message).toBe('Custom not found')
    expect(error.details).toEqual(details)
  })
})

describe('UserNotFoundError', () => {
  it('should have correct type and message', () => {
    const error = new UserNotFoundError()
    expect(error.type).toBe('NOT_FOUND_USER')
    expect(error.message).toBe('User not found')
    expect(error.statusCode).toBe(404)
  })
})

describe('EmailNotFoundError', () => {
  it('should have correct type and message', () => {
    const error = new EmailNotFoundError()
    expect(error.type).toBe('NOT_FOUND_EMAIL')
    expect(error.message).toBe('Email not found')
    expect(error.statusCode).toBe(404)
  })
})

describe('ProductNotFoundError', () => {
  it('should have correct type and message', () => {
    const error = new ProductNotFoundError()
    expect(error.type).toBe('NOT_FOUND_PRODUCT')
    expect(error.message).toBe('Product not found')
    expect(error.statusCode).toBe(404)
  })
})

describe('PostNotFoundError', () => {
  it('should have correct type and message', () => {
    const error = new PostNotFoundError()
    expect(error.type).toBe('NOT_FOUND_POST')
    expect(error.message).toBe('Post not found')
    expect(error.statusCode).toBe(404)
  })
})

describe('CommentNotFoundError', () => {
  it('should have correct type and message', () => {
    const error = new CommentNotFoundError()
    expect(error.type).toBe('NOT_FOUND_COMMENT')
    expect(error.message).toBe('Comment not found')
    expect(error.statusCode).toBe(404)
  })
})

describe('CategoryNotFoundError', () => {
  it('should have correct type and message', () => {
    const error = new CategoryNotFoundError()
    expect(error.type).toBe('NOT_FOUND_CATEGORY')
    expect(error.message).toBe('Category not found')
    expect(error.statusCode).toBe(404)
  })
})

describe('FileNotFoundError', () => {
  it('should have correct type and message', () => {
    const error = new FileNotFoundError()
    expect(error.type).toBe('NOT_FOUND_FILE')
    expect(error.message).toBe('File not found')
    expect(error.statusCode).toBe(404)
  })
})

describe('ImageNotFoundError', () => {
  it('should have correct type and message', () => {
    const error = new ImageNotFoundError()
    expect(error.type).toBe('NOT_FOUND_IMAGE')
    expect(error.message).toBe('Image not found')
    expect(error.statusCode).toBe(404)
  })
})

describe('AddressNotFoundError', () => {
  it('should have correct type and message', () => {
    const error = new AddressNotFoundError()
    expect(error.type).toBe('NOT_FOUND_ADDRESS')
    expect(error.message).toBe('Address not found')
    expect(error.statusCode).toBe(404)
  })
})
