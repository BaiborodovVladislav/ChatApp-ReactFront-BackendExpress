import express from "express";
import { getMessages, sendMessage } from "../controllers/controller.messaage.js";
import protectRoute from "../middelwere/protectRoute.js";


const router = express.Router();

router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage)

export default router