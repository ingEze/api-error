import { ErrorHandler } from 'src/errors/error-handler'

import {
  ForbiddenError,
  ForbiddenUserError,
  ForbiddenEmailError,
  ForbiddenProductError,
  ForbiddenPostError,
  ForbiddenCommentError,
  ForbiddenCategoryError,
  ForbiddenFileError,
  ForbiddenImageError,
  ForbiddenAddressError
} from 'src/errors/forbidden-error'

describe('ForbiddenError', () => {
  it('should be instance of ErrorHandler with default message', () => {
    const error = new ForbiddenError()
    expect(error).toBeInstanceOf(ErrorHandler)
    expect(error.statusCode).toBe(403)
    expect(error.type).toBe('FORBIDDEN')
    expect(error.message).toBe('Forbidden access')
  })

  it('should accept custom message and details', () => {
    const details = { field: 'user' }
    const error = new ForbiddenError('Custom forbidden', 'FORBIDDEN', details)
    expect(error.message).toBe('Custom forbidden')
    expect(error.details).toEqual(details)
  })
})

describe('ForbiddenUserError', () => {
  it('should have correct type and message', () => {
    const error = new ForbiddenUserError()
    expect(error.type).toBe('FORBIDDEN_USER')
    expect(error.message).toBe('User access forbidden')
    expect(error.statusCode).toBe(403)
  })
})

describe('ForbiddenEmailError', () => {
  it('should have correct type and message', () => {
    const error = new ForbiddenEmailError()
    expect(error.type).toBe('FORBIDDEN_EMAIL')
    expect(error.message).toBe('Email access forbidden')
    expect(error.statusCode).toBe(403)
  })
})

describe('ForbiddenProductError', () => {
  it('should have correct type and message', () => {
    const error = new ForbiddenProductError()
    expect(error.type).toBe('FORBIDDEN_PRODUCT')
    expect(error.message).toBe('Product access forbidden')
    expect(error.statusCode).toBe(403)
  })
})

describe('ForbiddenPostError', () => {
  it('should have correct type and message', () => {
    const error = new ForbiddenPostError()
    expect(error.type).toBe('FORBIDDEN_POST')
    expect(error.message).toBe('Post access forbidden')
    expect(error.statusCode).toBe(403)
  })
})

describe('ForbiddenCommentError', () => {
  it('should have correct type and message', () => {
    const error = new ForbiddenCommentError()
    expect(error.type).toBe('FORBIDDEN_COMMENT')
    expect(error.message).toBe('Comment access forbidden')
    expect(error.statusCode).toBe(403)
  })
})

describe('ForbiddenCategoryError', () => {
  it('should have correct type and message', () => {
    const error = new ForbiddenCategoryError()
    expect(error.type).toBe('FORBIDDEN_CATEGORY')
    expect(error.message).toBe('Category access forbidden')
    expect(error.statusCode).toBe(403)
  })
})

describe('ForbiddenFileError', () => {
  it('should have correct type and message', () => {
    const error = new ForbiddenFileError()
    expect(error.type).toBe('FORBIDDEN_FILE')
    expect(error.message).toBe('File access forbidden')
    expect(error.statusCode).toBe(403)
  })
})

describe('ForbiddenImageError', () => {
  it('should have correct type and message', () => {
    const error = new ForbiddenImageError()
    expect(error.type).toBe('FORBIDDEN_IMAGE')
    expect(error.message).toBe('Image access forbidden')
    expect(error.statusCode).toBe(403)
  })
})

describe('ForbiddenAddressError', () => {
  it('should have correct type and message', () => {
    const error = new ForbiddenAddressError()
    expect(error.type).toBe('FORBIDDEN_ADDRESS')
    expect(error.message).toBe('Address access forbidden')
    expect(error.statusCode).toBe(403)
  })
})
