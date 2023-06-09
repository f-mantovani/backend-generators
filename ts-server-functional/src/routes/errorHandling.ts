import { NextFunction, Request, Response, Express } from "express";
import log from "../utils/logger";

export function errorHandling(app: Express ) {
  app.use((err: any, req: Request, res: Response, _: NextFunction) => {
    if (err.place === 'Validate') {
      log.error(`ERROR: ${err.issues[0].message} in ${req.method} ${req.path}`)
      return res.status(err.statusCode || 500).json({ message: err.issues[0].message, place: err.place })
    }
    log.error(`ERROR: ${err.message} in ${req.method} ${req.path}`)
    return res.status(err.statusCode || 500).json({ message: err.message, place: err.place })
  })
}