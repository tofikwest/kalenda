import { NextFunction, Request, Response } from 'express'
import http_status_codes from '../http_status_codes/http_status_codes'
import BaseError from '../custom_errors/base_error'

function errorMiddleware(
  err: Error | BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const detectInstance =
    err instanceof BaseError
      ? err.statusCode
      : http_status_codes.INTERNAL_SERVER

  res.status(detectInstance).send(err.message)
}

export function isOperationalError(error: Error | BaseError): boolean {
  if (error instanceof BaseError) return error.isOperational
  else return false
}
export default errorMiddleware
