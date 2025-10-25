import Joi from 'joi';

export const createCategorySchema = Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().optional(),
});

export const updateCategorySchema = Joi.object({
    name: Joi.string().min(2).optional(),
    description: Joi.string().optional(),
});

export const categoryIdParamSchema = Joi.object({
    id: Joi.string().uuid().required(),
});