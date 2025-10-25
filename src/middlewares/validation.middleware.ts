import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

type ValidationType = 'body' | 'query' | 'params';

export const validate = (schema: Joi.ObjectSchema, type: ValidationType = 'body') => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], { abortEarly: false });
        if (error) {
            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                details: error.details.map(d => d.message),
            });
        }
        next();
    };
};