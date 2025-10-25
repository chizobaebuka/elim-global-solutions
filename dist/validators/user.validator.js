"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIdParamSchema = exports.updateUserSchema = exports.loginUserSchema = exports.createUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createUserSchema = joi_1.default.object({
    name: joi_1.default.string().min(2).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
    userType: joi_1.default.string().valid('admin', 'user').default('user').required(),
});
exports.loginUserSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
exports.updateUserSchema = joi_1.default.object({
    name: joi_1.default.string().optional(),
    email: joi_1.default.string().email().optional(),
    password: joi_1.default.string().min(6).optional(),
    userType: joi_1.default.string().valid('admin', 'user').optional(),
});
exports.userIdParamSchema = joi_1.default.object({
    id: joi_1.default.string()
        .uuid({ version: ['uuidv4'] })
        .required()
        .messages({
        'string.guid': 'Invalid user ID format',
    }),
});
