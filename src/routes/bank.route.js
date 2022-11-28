import express from "express";
import BankController from "../controllers/bank.controller.js";

const router = express.Router();

router.post('/add',BankController.addBank)

export default router;