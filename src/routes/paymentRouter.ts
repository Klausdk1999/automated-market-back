import { Router } from 'express';
import { receiveInfo, receivePurchase } from '../controllers/paymentController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import productSchema from '../schemas/productSchema';

const productRouter = Router();

productRouter.post('/purchase', validateToken, receivePurchase);
productRouter.post('/picpay', receiveInfo);

export default productRouter;
