import * as rfidRepository from '../repositories/EPCRepository';

export async function findByCodigo(codigo:string) {
  const productReturn = await rfidRepository.getByEPC(codigo);
  return productReturn;
}

export async function insertEPC(data: {
  code     :  string;
  product_id : number;
}) {

	await rfidRepository.insert(data);

}