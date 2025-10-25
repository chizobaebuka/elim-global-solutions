"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stream = exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, printf, colorize } = winston_1.default.format;
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] - ${message}`;
});
exports.logger = winston_1.default.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(timestamp(), myFormat),
    transports: [
        new winston_1.default.transports.Console({ format: combine(colorize(), timestamp(), myFormat) })
    ]
});
exports.stream = {
    write: (message) => exports.logger.info(message.trim())
};
