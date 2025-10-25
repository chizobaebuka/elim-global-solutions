"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const logger_1 = require("../lib/logger/logger");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorHandler(err, req, res) {
    const status = err.status ?? 500;
    const message = err.message || 'Internal Server Error';
    logger_1.logger.error(`${req.method} ${req.originalUrl} - ${message}`);
    if (process.env.NODE_ENV === 'production') {
        res.status(status).json({ status: 'error', message });
    }
    else {
        res.status(status).json({ status: 'error', message, stack: err.stack });
    }
}
