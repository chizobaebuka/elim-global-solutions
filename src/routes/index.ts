import { Router } from 'express';
import healthRouter from './health.routes';

const router = Router();

// ✅ this becomes /api/health
router.use('/health', healthRouter);

export default router;