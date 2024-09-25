import { Request,Response } from "express"; 
import axios from "axios";

const  eventBroker= axios.create({
    baseURL: "http://localhost:3001"
})

const sales:any[] = [
    {
        id: 1,
        name: "Sale 1",
        value: 100,
    },
    {
        id: 2,
        name: "Sale 2",
        value: 200,
    },
    {
        id: 3,
        name: "Sale 3",
        value: 300,
    },
];



export const getAllSales = (req: Request, res: Response) => {
  return res.status(200).json({
    massage: "All Sales",
    sales,
  })
};

export const createSale = async (req: Request, res: Response) => {
    const { data} = req.body;
    const {uid,product_id,quantity} = data

    const {data:user} = await eventBroker.post("/events",{
        event: "GET_USERS",
    }); 

    console.log(data);

    const {data:product} = await eventBroker.post("/events",{
        event: "GET_PRODUCTS",
    });

    
    const sale = {
        user: user.users[0],
        product: product.products[0],
        quantity,
        price:{
            unit: product.products[0]?.price,
            total: product.products[0]?.price * quantity,
        }
    }
    return res.status(201).json({
        message: "ok",
        sale

    });
}
