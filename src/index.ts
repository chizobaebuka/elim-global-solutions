import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import { App } from './app';
import { logger } from './lib/logger/logger';
import { sequelize } from './lib/db/sequelize';

const PORT = process.env.PORT || 4000;

async function start() {
    try {
        await sequelize.authenticate();
        logger.info('Database connected');
        const app = await App.init();
        app.listen(PORT, () => {
            logger.info(`Server started on port ${PORT}`);
            logger.info(`Swagger UI: http://localhost:${PORT}/api/docs`);
        });
    } catch (err: unknown) {
        const error = err instanceof Error ? err : new Error(String(err));
        logger.error('Failed to start: ' + error.message);
        logger.error(error.stack ?? '');
        process.exit(1);
    }
}

start();
