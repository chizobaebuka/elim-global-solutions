"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = void 0;
const sequelize_1 = require("../lib/db/sequelize");
const health = async (req, res) => {
    const response = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        database: 'unknown',
    };
    try {
        await sequelize_1.sequelize.authenticate();
        response.database = 'connected';
        res.status(200).json(response);
    }
    catch (error) {
        response.status = 'error';
        response.database = 'disconnected';
        res.status(500).json({
            status: 'error',
            message: `Database connection error, ${error}`,
        });
    }
};
exports.health = health;
