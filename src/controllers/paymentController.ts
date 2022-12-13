import { Request, Response } from 'express';
import { Purchase } from '@prisma/client';
import * as EPCService from '../services/EPCService';

export type CreatePurchaseData = Omit<Purchase, "id" | "reference_id" | "payment_url">;

export async function receivePurchase(req: Request, res: Response) {
	const products_epcs = req.body.epcs;
  
  await EPCService.purchase(products_epcs);

	res.status(201);
}

export async function receiveInfo(req: Request, res: Response) {
  const data = req.body;

  await EPCService.picpay(data);

  res.status(201);
}
 