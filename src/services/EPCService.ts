import * as epcRepository from '../repositories/EPCRepository';

export async function findByCodigo(codigo:string) {
  const productReturn = await epcRepository.getByEPC(codigo);
  return productReturn;
}

export async function insertEPC(data:any) {

	await epcRepository.insert(data.code,data.product_id);

  return
}

export async function purchase(products:any) {

  const purchase_id = await epcRepository.create_purchase();

  for(let i = 0; i < products.length; i++) {
    await epcRepository.addPurchase(products[i],purchase_id);
  }
  
  return
}

export async function picpay(data: any) {

	await epcRepository.addPicPay(data);

  return
}
