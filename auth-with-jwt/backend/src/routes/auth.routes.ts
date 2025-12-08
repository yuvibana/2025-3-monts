import express from "express";
import { register, login, me, refresh, logout } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refresh);
router.get("/me", authMiddleware, me);
router.post("/logout", logout);

export default router;
