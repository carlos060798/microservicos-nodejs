import { Router } from "express"; 
import { getAllSales, createSale } from "../controllers/salesController";

const router = Router(); 



router.get("/all", getAllSales);

router.post("/create", createSale);


export default router;