import { Router } from 'express';
import healthRouter from '../routes/health.routes'

// import jobRouter from './job.routes'; // we'll create a minimal health route and a placeholder job route later

const router = Router();

router.use('/', healthRouter);
// keep docs for later routes; safe if job.routes.ts not present yet
try {
    // router.use('/jobs', jobRouter);
} catch (e) { }

export default router;
