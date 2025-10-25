import { Request, Response } from 'express';
import { sequelize } from '../lib/db/sequelize';

export const health = async (req: Request, res: Response) => {
    const response = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        database: 'unknown',
    };

    try {
        await sequelize.authenticate();
        response.database = 'connected';
        res.status(200).json(response);
    } catch (error) {
        response.status = 'error';
        response.database = 'disconnected';
        res.status(500).json(response);
    }
};