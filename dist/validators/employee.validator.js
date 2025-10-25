"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeIdParamSchema = exports.updateEmployeeSchema = exports.createEmployeeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createEmployeeSchema = joi_1.default.object({
    firstName: joi_1.default.string().min(2).required(),
    lastName: joi_1.default.string().min(2).required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().optional(),
    role: joi_1.default.string().valid('USER', 'ADMIN').optional(),
});
exports.updateEmployeeSchema = joi_1.default.object({
    firstName: joi_1.default.string().min(2).optional(),
    lastName: joi_1.default.string().min(2).optional(),
    email: joi_1.default.string().email().optional(),
    phone: joi_1.default.string().optional(),
    role: joi_1.default.string().valid('USER', 'ADMIN').optional(),
});
exports.employeeIdParamSchema = joi_1.default.object({
    id: joi_1.default.string().uuid().required(),
});
