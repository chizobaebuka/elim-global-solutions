"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema, type = 'body') => {
    return (req, res, next) => {
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
exports.validate = validate;
