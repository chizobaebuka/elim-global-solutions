import winston from 'winston';

const { combine, timestamp, printf, colorize } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] - ${message}`;
});

export const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(timestamp(), myFormat),
    transports: [
        new winston.transports.Console({ format: combine(colorize(), timestamp(), myFormat) })
    ]
});

export const stream = {
    write: (message: string) => logger.info(message.trim())
};
