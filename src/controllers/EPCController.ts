import { Request, Response } from 'express';
import {findByCodigo, insertEPC} from '../services/EPCService';

export async function getProductByCode(req: Request, res: Response) {
	let {codigo} = req.body;
	const retorno = await findByCodigo(codigo);
	res.status(200).send(retorno)
}

export async function associateProductByCode(req: Request, res: Response) {
	const data = req.body;
	data.product_id=Number(data.product_id);

	await insertEPC(data);

	res.sendStatus(201);
}