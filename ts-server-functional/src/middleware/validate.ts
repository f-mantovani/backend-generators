import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

export const validate =
	(schema: AnyZodObject) =>
   (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query
      })
      next()
    } catch (err: any) {
      err.place = 'Validate'
      err.statusCode = 400
      next(err)
    }
   }
