import { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger/logger';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    logger.error(`${req.method} ${req.originalUrl} - ${message}`);
    if (process.env.NODE_ENV === 'production') {
        res.status(status).json({ status: 'error', message });
    } else {
        res.status(status).json({ status: 'error', message, stack: err.stack });
    }
}
