import { Request, Response, NextFunction } from 'express'
import { ErrorHandler } from 'src/errors'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function expressHandlerMiddleware(err: Error, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof ErrorHandler) {
    res.status(err.statusCode).json(err.toJSON())
  } else {
    res.status(500).json({
      success: false,
      statusCode: 500,
      type: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred'
    })
  }
}

