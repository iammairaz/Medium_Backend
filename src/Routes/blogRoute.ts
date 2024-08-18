import express from "express";
import authMiddleware from "../Middlewares/authMiddleware";
import blogController from "../Controllers/blogController";

const router = express.Router();

router.post("/createBlog", authMiddleware.authenticateToken, blogController.saveBlog);
router.put("/updateBlog/:id", authMiddleware.authenticateToken, blogController.updateBlog);
router.get("/fetchBlog/:id", authMiddleware.authenticateToken, blogController.fetchBlog);
router.get("/fetchBlogs", authMiddleware.authenticateToken, blogController.fetchBlogs);

export default router;