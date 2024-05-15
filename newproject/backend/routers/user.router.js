import express from "express";
import protectRoute from "../middelwere/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)

export default router