interface IBaseError {
  statusCode: number
  isOperational: boolean
  description: string
  name: string
}

class BaseError extends Error implements IBaseError {
  public isOperational: boolean
  public statusCode: number
  public name: string
  public description: string

  constructor(
    name: string,
    description: string,
    statusCode: number,
    isOperational = true
  ) {
    super(description)
    Object.setPrototypeOf(this, new.target.prototype)

    this.description = description
    this.name = name
    this.statusCode = statusCode
    this.isOperational = isOperational
    Error.captureStackTrace(this)
  }
}

export default BaseError
