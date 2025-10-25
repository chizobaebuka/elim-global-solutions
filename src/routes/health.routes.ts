import { Router } from 'express';
import { health } from '../controllers/health.controller';

const r = Router();
r.get('/', health);
export default r;
