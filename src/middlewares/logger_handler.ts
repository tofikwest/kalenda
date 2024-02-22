import { NextFunction, Request, Response } from 'express'
import BaseError from '../custom_errors/base_error'

export function loggerFn(err: Error) {
  console.error(err)
}

function loggerMiddleware(
  err: Error | BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  loggerFn(err)
  next(err)
}

export default loggerMiddleware
