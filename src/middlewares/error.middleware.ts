import { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger/logger';

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    logger.error(`${req.method} ${req.url} - ${err.message}`);

    if (!res || typeof res.status !== 'function') {
        console.error('Invalid response object in error handler');
        return;
    }

    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: 'error',
        message,
    });
};