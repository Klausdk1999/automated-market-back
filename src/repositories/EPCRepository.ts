import prisma from '../config/database';
import { EPC } from '@prisma/client';
import { Product } from '@prisma/client';

export type TEPCs = Omit<EPC, "id"| "purchase_id">

export async function findAll() {
  return await prisma.ePC.findMany();
}

export async function insert(data:any) {
  await prisma.$queryRaw`INSERT INTO epcs (code,product_id) VALUES (${data.code},${data.product_id});`;
  return 
}

export async function getByEPC(codigo: string){
  const product:Product = await prisma.$queryRaw`
      SELECT * FROM products
      JOIN epcs ON products.id = epcs.product_id
      WHERE epcs.code = ${codigo};`;

  console.log(product);
  return product;
}

export async function create_purchase() {
  const id = await prisma.$queryRaw`INSERT INTO purchases (owner_id) VALUES (1) RETURNING id;`;
  
  return id[0].id;
}

export async function addPurchase(epc,purchase_id) { // update EPC com purchase id
  
  await prisma.$queryRaw`UPDATE epcs SET purchase_id=${purchase_id} WHERE epcs.code=${epc} ;`;
  
  return
}

export async function addPicPay(data) { // update picpay info no purchase
  return await prisma.$queryRaw`UPDATE purchases SET reference_id = ${data.reference_id}, payment_url=${data.payment_url}  WHERE purchases.id = ${data.id} ;`;
}