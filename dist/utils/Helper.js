"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class Helper {
    static generateToken(payload, expiresIn = '2d') {
        const secret = process.env.JWT_SECRET;
        return jsonwebtoken_1.default.sign(payload, secret, { expiresIn });
    }
    static verifyToken(token) {
        const secret = process.env.JWT_SECRET;
        return jsonwebtoken_1.default.verify(token, secret);
    }
    static getAuthToken(req) {
        const authHeader = req.headers?.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer '))
            return null;
        return authHeader.split(' ')[1];
    }
    static async hashPassword(password) {
        const saltRounds = 10;
        return bcrypt_1.default.hash(password, saltRounds);
    }
    static async comparePassword(password, hashed) {
        return bcrypt_1.default.compare(password, hashed);
    }
    static paginateResponse(data, totalItems, page = 1, limit = 10) {
        const totalPages = Math.ceil(totalItems / limit);
        return {
            data,
            pagination: {
                totalItems,
                totalPages,
                currentPage: page,
                pageSize: limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            },
        };
    }
}
exports.Helper = Helper;
