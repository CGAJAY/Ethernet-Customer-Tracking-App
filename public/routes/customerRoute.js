import { Router } from "express";
import { getAllCustomers } from "../controllers/customerController.js";

const customerRoutes = Router();

customerRoutes.get("/customers", getAllCustomers);

export { customerRoutes };
