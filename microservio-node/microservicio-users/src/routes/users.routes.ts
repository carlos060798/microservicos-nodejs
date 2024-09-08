import { Router } from "express"; 
import { allProducts } from "../controllers/users.controller";

const  router = Router();

router.get('/users/all', allProducts);



export  default  router;