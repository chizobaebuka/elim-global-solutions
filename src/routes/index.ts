import { Router } from 'express';
import healthRouter from './health.routes';
import authRoutes from './auth.routes';
import employeeRoutes from './employee.routes';

const router = Router();

router.use('/health', healthRouter);
router.use('/auth', authRoutes)
router.use('/employees', employeeRoutes)

export default router;