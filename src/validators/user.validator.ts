import Joi from 'joi';

export const createUserSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    userType: Joi.string().valid('admin', 'user').default('user').required(),
});

export const loginUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const updateUserSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(6).optional(),
    userType: Joi.string().valid('admin', 'user').optional(),
});

export const userIdParamSchema = Joi.object({
    id: Joi.string()
        .uuid({ version: ['uuidv4'] })
        .required()
        .messages({
            'string.guid': 'Invalid user ID format',
        }),
});