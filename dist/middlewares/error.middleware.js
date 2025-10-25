"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = require("../lib/logger/logger");
const errorHandler = (err, req, res, next) => {
    logger_1.logger.error(`${req.method} ${req.url} - ${err.message}`);
    if (!res || typeof res.status !== 'function') {
        console.error('Invalid response object in error handler');
        return;
    }
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        status: 'error',
        message,
    });
};
exports.errorHandler = errorHandler;
