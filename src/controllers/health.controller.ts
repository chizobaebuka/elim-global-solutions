import { Request, Response, NextFunction } from 'express';
import { sequelize } from '../lib/db/sequelize';

export const health = async (req: Request, res: Response, next: NextFunction) => {
    const response = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        database: 'unknown',
    };

    try {
        await sequelize.authenticate();
        response.database = 'connected';
        return res.status(200).json(response);
    } catch (error) {
        response.status = 'error';
        response.database = 'disconnected';
        // ✅ Pass error to centralized error handler
        return next(error);
    }
};