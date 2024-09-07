import { Router } from "express"; 
import { allProducts } from "../controllers/products.controller";

const  router = Router();

router.get('/products/all', allProducts);



export  default  router;