import { ErrorHandler } from 'src/errors/error-handler'
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
} from 'src/errors/validation-error'

describe('ValidationError', () => {
  it('should be instance of ErrorHandler with default message', () => {
    const error = new ValidationError()
    expect(error).toBeInstanceOf(ErrorHandler)
    expect(error.statusCode).toBe(422)
    expect(error.type).toBe('VALIDATION')
    expect(error.message).toBe('Validation error')
  })

  it('should accept custom message and details', () => {
    const details = { field: 'email' }
    const error = new ValidationError('Custom validation', 'VALIDATION', details)
    expect(error.message).toBe('Custom validation')
    expect(error.details).toEqual(details)
  })
})

describe('ValidationUserError', () => {
  it('should have correct type and message', () => {
    const error = new ValidationUserError()
    expect(error.type).toBe('VALIDATION_USER')
    expect(error.message).toBe('User validation failed')
    expect(error.statusCode).toBe(422)
  })
})

describe('ValidationEmailError', () => {
  it('should have correct type and message', () => {
    const error = new ValidationEmailError()
    expect(error.type).toBe('VALIDATION_EMAIL')
    expect(error.message).toBe('Email validation failed')
    expect(error.statusCode).toBe(422)
  })
})

describe('ValidationProductError', () => {
  it('should have correct type and message', () => {
    const error = new ValidationProductError()
    expect(error.type).toBe('VALIDATION_PRODUCT')
    expect(error.message).toBe('Product validation failed')
    expect(error.statusCode).toBe(422)
  })
})

describe('ValidationPostError', () => {
  it('should have correct type and message', () => {
    const error = new ValidationPostError()
    expect(error.type).toBe('VALIDATION_POST')
    expect(error.message).toBe('Post validation failed')
    expect(error.statusCode).toBe(422)
  })
})

describe('ValidationCommentError', () => {
  it('should have correct type and message', () => {
    const error = new ValidationCommentError()
    expect(error.type).toBe('VALIDATION_COMMENT')
    expect(error.message).toBe('Comment validation failed')
    expect(error.statusCode).toBe(422)
  })
})

describe('ValidationCategoryError', () => {
  it('should have correct type and message', () => {
    const error = new ValidationCategoryError()
    expect(error.type).toBe('VALIDATION_CATEGORY')
    expect(error.message).toBe('Category validation failed')
    expect(error.statusCode).toBe(422)
  })
})

describe('ValidationFileError', () => {
  it('should have correct type and message', () => {
    const error = new ValidationFileError()
    expect(error.type).toBe('VALIDATION_FILE')
    expect(error.message).toBe('File validation failed')
    expect(error.statusCode).toBe(422)
  })
})

describe('ValidationImageError', () => {
  it('should have correct type and message', () => {
    const error = new ValidationImageError()
    expect(error.type).toBe('VALIDATION_IMAGE')
    expect(error.message).toBe('Image validation failed')
    expect(error.statusCode).toBe(422)
  })
})

describe('ValidationAddressError', () => {
  it('should have correct type and message', () => {
    const error = new ValidationAddressError()
    expect(error.type).toBe('VALIDATION_ADDRESS')
    expect(error.message).toBe('Address validation failed')
    expect(error.statusCode).toBe(422)
  })
})
