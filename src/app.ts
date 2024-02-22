import express from 'express'
import loggerFnMiddleware, { loggerFn } from './middlewares/logger_handler'
import errorMiddleware, {
  isOperationalError,
} from './middlewares/error_handler'
import BaseError from './custom_errors/base_error'

class App {
  public express
  public router

  constructor() {
    this.express = express()
    this.router = express.Router()

    this.errorHandlerByEvent()

    this.importantMiddlewares()
    this.loggerMiddleware()
    this.errorHandlerMiddleware()
  }

  private importantMiddlewares() {
    this.express.use(express.json())
  }

  // private routes() {}

  private errorHandlerByEvent() {
    process.on('unhandledRejection', (err: Error | BaseError) => {
      throw err
    })

    process.on('uncaughtException', (err: Error | BaseError) => {
      loggerFn(err)
      if (!isOperationalError(err)) process.exit(1)
    })
  }

  private loggerMiddleware() {
    this.express.use(loggerFnMiddleware)
  }

  private errorHandlerMiddleware() {
    this.express.use(errorMiddleware)
  }
}

export default new App().express
