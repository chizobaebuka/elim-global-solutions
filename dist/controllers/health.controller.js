"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = void 0;
const sequelize_1 = require("../lib/db/sequelize");
const health = async (req, res, next) => {
    const response = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        database: 'unknown',
    };
    try {
        await sequelize_1.sequelize.authenticate();
        response.database = 'connected';
        return res.status(200).json(response);
    }
    catch (error) {
        response.status = 'error';
        response.database = 'disconnected';
        // ✅ Pass error to centralized error handler
        return next(error);
    }
};
exports.health = health;
