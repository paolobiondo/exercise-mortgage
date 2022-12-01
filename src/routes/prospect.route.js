import express from "express";
import ProspectController from "../controllers/prospect.controller.js";

const router = express.Router();

router.post("/add", ProspectController.addProspect);
router.get("/prospect", ProspectController.getProspect);

export default router;
