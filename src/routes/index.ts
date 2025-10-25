import { Router } from 'express';
import healthRouter from './health.routes';
import authRoutes from './auth.routes';

const router = Router();

router.use('/health', healthRouter);
router.use('/auth', authRoutes)

export default router;