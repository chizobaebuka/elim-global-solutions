"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = require("./app");
const logger_1 = require("./lib/logger/logger");
const models_1 = require("./models"); // 👈 import from models/index instead of directly from lib/db/sequelize
const sequelize_1 = require("./lib/db/sequelize");
const PORT = process.env.PORT || 4000;
async function start() {
    try {
        await (0, sequelize_1.connectDB)();
        logger_1.logger.info('Database connected successfully');
        const app = await app_1.App.init();
        const server = app.listen(PORT, () => {
            logger_1.logger.info(`Server started on port ${PORT}`);
            logger_1.logger.info(`Api Docs: http://localhost:${PORT}/api/docs`);
        });
        const shutdown = async (signal) => {
            logger_1.logger.info(`${signal} received. Closing gracefully...`);
            server.close(async () => {
                await models_1.sequelize.close();
                logger_1.logger.info('Database connection closed gracefully.');
                process.exit(0);
            });
        };
        process.on('SIGTERM', () => shutdown('SIGTERM'));
        process.on('SIGINT', () => shutdown('SIGINT'));
    }
    catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        logger_1.logger.error('❌ Failed to start: ' + error.message);
        logger_1.logger.error(error.stack ?? '');
        process.exit(1);
    }
}
start();
