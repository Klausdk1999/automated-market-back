import { Request, Response } from 'express';
import {findByCodigo} from '../services/EPCService';
import {create} from '../repositories/createEPC'

export async function getProductByCode(req: Request, res: Response) {
	let {codigo} = req.body;
	const retorno = await findByCodigo(codigo);
	res.status(200).send(retorno)
}

export async function associateProductByCode(req: Request, res: Response) {
	const data = req.body;

	await create(data.code,data.product_id);

	res.sendStatus(201);
}