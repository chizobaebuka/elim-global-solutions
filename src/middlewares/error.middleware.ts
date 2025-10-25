import { Request, Response } from 'express';
import { logger } from '../lib/logger/logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(
    err: Error & { status?: number; stack?: string },
    req: Request,
    res: Response,
) {
    const status = err.status ?? 500;
    const message = err.message || 'Internal Server Error';
    logger.error(`${req.method} ${req.originalUrl} - ${message}`);
    if (process.env.NODE_ENV === 'production') {
        res.status(status).json({ status: 'error', message });
    } else {
        res.status(status).json({ status: 'error', message, stack: err.stack });
    }
}