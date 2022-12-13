import { Router } from 'express';
import { getProductByCode, associateProductByCode } from '../controllers/EPCController';

const rfidRouter = Router();

rfidRouter.post('/rfidtag', getProductByCode)
rfidRouter.post('/associate', associateProductByCode)

export default rfidRouter;