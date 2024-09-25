import { Router } from "express"; 
import { allProducts } from "../controllers/users.controller";

const  router = Router();

router.get('/all', allProducts);



export  default  router;