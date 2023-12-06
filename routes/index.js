import { Router } from 'express';
import { getStatus, getStats } from '../controllers/AppController';

const route = Router();

route.get('/status', getStatus);
route.get('/stats', getStats);

export default route;
