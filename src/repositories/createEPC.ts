import prisma from '../config/database';

export async function create(code, product_id) {
    return await prisma.$executeRaw`INSERT INTO epcs (code,product_id) VALUES (${code}, ${product_id})`;
}