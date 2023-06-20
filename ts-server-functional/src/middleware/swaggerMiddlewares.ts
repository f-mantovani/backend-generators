import { NextFunction, Request, Response } from 'express'
import log from '../utils/logger';

export const isSwaggerRequest = (req: Request, res: Response, next: NextFunction) => {
  const isSwaggerRequest = req.headers['swagger-ui'];

  if (isSwaggerRequest) {
    return res.status(403).json({
      message: 'Direct user creation from the Swagger documentation page is not allowed.',
    });
  }
  next()
}

export const addSwaggerHeader = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.referer) {
    req.headers['swagger-ui'] = 'The origin of the Swagger documentation page'
  }
  next()
}
