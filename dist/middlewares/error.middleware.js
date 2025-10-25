"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const logger_1 = require("../lib/logger/logger");
function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    logger_1.logger.error(`${req.method} ${req.originalUrl} - ${message}`);
    if (process.env.NODE_ENV === 'production') {
        res.status(status).json({ status: 'error', message });
    }
    else {
        res.status(status).json({ status: 'error', message, stack: err.stack });
    }
}
