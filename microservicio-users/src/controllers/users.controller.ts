import { Request, Response } from 'express';
import { Iuser } from '../interface/user.interface';
const users: Iuser[] = [
    {
        id: 1,
        name: 'Product 1',
        email: 'demo@example.com',
    },
    {
        id: 2,
        name: 'Product 2',
        email: ' demo@example.com',
    },
    {
        id: 3,
        name: 'Product 3',
        email: ' demo@example.@example.com',
    }
];
export const allProducts = (req: Request, res: Response) => {
    return res.json({
        message: 'All users',
        users
    });
}