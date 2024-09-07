import { Request, Response } from 'express';
import { Iproduct } from '../interface/product.interface';
const products: Iproduct[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Description of product 1',
        
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'Description of product 2'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        description: 'Description of product 3'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 400,
        description: 'Description of product 4'
    }
];
export const allProducts = (req: Request, res: Response) => {
    return res.json({
        message: 'Products'
        , products
    });
}