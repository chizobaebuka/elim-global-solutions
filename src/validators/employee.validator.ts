import Joi from 'joi';

export const createEmployeeSchema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().optional(),
    role: Joi.string().valid('USER', 'ADMIN').optional(),
});

export const updateEmployeeSchema = Joi.object({
    firstName: Joi.string().min(2).optional(),
    lastName: Joi.string().min(2).optional(),
    email: Joi.string().email().optional(),
    phone: Joi.string().optional(),
    role: Joi.string().valid('USER', 'ADMIN').optional(),
});

export const employeeIdParamSchema = Joi.object({
    id: Joi.string().uuid().required(),
});