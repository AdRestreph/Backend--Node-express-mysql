import express from "express";
import { registerCtrl, loginCtrl } from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export default router;
