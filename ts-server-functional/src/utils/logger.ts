import logger from 'pino';
import dayjs from 'dayjs';
import { NextFunction, Request, Response } from 'express';

const log = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
        },
    },
    timestamp: () => `,"time":"${dayjs().format('HH:mm:ss')}"`, 

});

export default log;

export function requestLogger(req: Request, res: Response, next: NextFunction) {
    log.info(`${req.method} ${req.path}`)
    next()
}