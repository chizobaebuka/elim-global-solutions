import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { logger, stream as morganStream } from './lib/logger/logger';
import routes from './routes';
import { swaggerOptions } from './config/swagger';
import { errorHandler } from './middlewares/error.middleware';
import healthRoutes from './routes/health.routes';

export class App {
    public static async init() {
        const app = express();
        app.use(helmet());
        app.use(cors());
        app.use(express.json({ limit: '10mb' }));
        app.use(express.urlencoded({ extended: true }));

        // morgan -> winston
        app.use(morgan('combined', { stream: morganStream }));

        // swagger
        const swaggerSpec = swaggerJSDoc(swaggerOptions);
        app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

        // routes
        app.use('/api', routes);

        app.use('/health', healthRoutes);

        // error handler
        app.use(errorHandler);

        return app;
    }
}
