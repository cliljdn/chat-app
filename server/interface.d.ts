import { Request, Response } from 'express'

declare global {
     interface ExpressRouting {
          ExpressRequest: Request
          ExpressResponse: Response
     }
}

declare const ExpressResponse: Response
