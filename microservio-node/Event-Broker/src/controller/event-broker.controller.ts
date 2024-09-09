import { Request, Response } from 'express';
import { getAllProducts } from './products.controller';
import { productEnum } from '../enun/product.enum';

export const eventBrokerController = async (req: Request, res: Response) => {
    const { event, data } = req.body;
    console.log({
        msg: 'Event received',
        event,
    });

   if(event === productEnum.GET_PRODUCTS){
const products = await getAllProducts()
return res.status(200).send(products);
   }
   
 return  res.status(404).send('Event not found');
    
}



    
