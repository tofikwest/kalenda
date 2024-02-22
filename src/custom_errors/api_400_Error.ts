import http_status_codes from '../http_status_codes/http_status_codes'
import BaseError from './base_error'

interface IApi400Error {
  name: string
  statusCode: number
  description: string
  isOperational: boolean
}

class Api400Error extends BaseError implements IApi400Error {
  constructor(
    name: string,
    statusCode: number = http_status_codes.BAD_REQUEST,
    description: string = 'Bad request',
    isOperational = true
  ) {
    super(name, description, statusCode, isOperational)
  }
}

export default Api400Error
