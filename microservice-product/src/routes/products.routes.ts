import { Router } from "express"; 
import { allProducts } from "../controllers/products.controller";

const  router = Router();

router.get('/all', allProducts);



export  default  router;