import express from "express";
import UserController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/add", UserController.addUser);

export default router;
