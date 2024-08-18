import express from "express";
import userController from "../Controllers/userController";
import userMiddleware from "../Middlewares/userMiddleware";

const router = express.Router();

router.post("/signup", userMiddleware.signup, userController.signup);
router.post("/signin", userMiddleware.signin, userController.signin);

export default router;