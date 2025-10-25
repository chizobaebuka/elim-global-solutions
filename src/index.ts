import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import { App } from './app';
import { logger } from './lib/logger/logger';
import { sequelize } from './models'; // 👈 import from models/index instead of directly from lib/db/sequelize
import { connectDB } from './lib/db/sequelize';

const PORT = process.env.PORT || 4000;

async function start() {
    try {
        await connectDB();
        logger.info('Database connected successfully');

        const app = await App.init();

        const server = app.listen(PORT, () => {
            logger.info(`Server started on port ${PORT}`);
            logger.info(`Api Docs: http://localhost:${PORT}/api/docs`);
        });

        const shutdown = async (signal: string) => {
            logger.info(`${signal} received. Closing gracefully...`);
            server.close(async () => {
                await sequelize.close();
                logger.info('Database connection closed gracefully.');
                process.exit(0);
            });
        };

        process.on('SIGTERM', () => shutdown('SIGTERM'));
        process.on('SIGINT', () => shutdown('SIGINT'));

    } catch (err: unknown) {
        const error = err instanceof Error ? err : new Error(String(err));
        logger.error('❌ Failed to start: ' + error.message);
        logger.error(error.stack ?? '');
        process.exit(1);
    }
}

start();