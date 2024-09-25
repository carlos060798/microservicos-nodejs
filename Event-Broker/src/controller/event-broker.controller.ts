import { Request, Response } from 'express';
import { getAllProducts } from './products.controller';
import { productEnum } from '../enun/product.enum';
import { userEnum } from '../enun/user.enum';
import { getAllUsers } from './users.controller';
import { SalesEnum } from '../enun/sales.enum';
import { createSale } from './sales.controller';

export const eventBrokerController = async (req: Request, res: Response) => {
    const {  data } = req.body;
    const event = req.body.event.toUpperCase();
    
  

    if (event=== productEnum.GET_PRODUCTS) {
        const products = await getAllProducts()
        return res.status(200).send(products);
    }

    if (event === userEnum.GET_USERS) {
        const users = await getAllUsers()
        return res.status(200).send(users);
    }

    if (event === SalesEnum.CREATE_SALE) {
        const sales = await createSale(data)
        return res.status(200).send(sales);
    }





    return res.status(404).send('Event not found');

}




