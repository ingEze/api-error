import { ErrorHandler } from 'src/errors/error-handler'

describe('ErrorHandler', () => {
  it('should create an instance with default values', () => {
    const error = new ErrorHandler('Default error')
    expect(error).toBeInstanceOf(ErrorHandler)
    expect(error.success).toBe(false)
    expect(error.statusCode).toBe(500)
    expect(error.type).toBe('GENERIC_ERROR')
    expect(error.message).toBe('Default error')
    expect(error.details).toBeUndefined()
  })

  it('should create an instance with custom values', () => {
    const details = { field: 'email' }
    const error = new ErrorHandler('Not found', 404, 'NOT_FOUND', details)
    expect(error.statusCode).toBe(404)
    expect(error.type).toBe('NOT_FOUND')
    expect(error.message).toBe('Not found')
    expect(error.details).toEqual(details)
  })

  it('should return correct JSON representation without details', () => {
    const error = new ErrorHandler('Unauthorized', 401, 'UNAUTHORIZED')
    const json = error.toJSON()
    expect(json).toEqual({
      success: false,
      type: 'UNAUTHORIZED',
      statusCode: 401,
      message: 'Unauthorized'
    })
  })

  it('should return correct JSON representation with details', () => {
    const details = { reason: 'token_expired' }
    const error = new ErrorHandler('Unauthorized', 401, 'UNAUTHORIZED', details)
    const json = error.toJSON()
    expect(json).toEqual({
      success: false,
      type: 'UNAUTHORIZED',
      statusCode: 401,
      message: 'Unauthorized',
      details
    })
  })

  it('should set message to "Internal server error" if message is empty', () => {
    const error = new ErrorHandler('')
    expect(error.message).toBe('Internal server error')
  })
})
