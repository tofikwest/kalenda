import http_status_codes from '../http_status_codes/http_status_codes'
import BaseError from './base_error'

interface IApi404Error {
  name: string
  statusCode: number
  description: string
  isOperational: boolean
}

class Api404Error extends BaseError implements IApi404Error {
  constructor(
    name: string,
    statusCode: number = http_status_codes.NOT_FOUND,
    description: string = 'Not Found',
    isOperational: boolean = true
  ) {
    super(name, description, statusCode, isOperational)
  }
}

export default Api404Error
