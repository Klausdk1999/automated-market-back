import { Router } from 'express';
import { receiveInfo, receivePurchase } from '../controllers/paymentController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import productSchema from '../schemas/productSchema';

const paymentRouter = Router();

paymentRouter.post('/purchase', receivePurchase);
paymentRouter.post('/picpay', receiveInfo);

export default paymentRouter;
