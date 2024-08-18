"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../Middlewares/authMiddleware"));
const blogController_1 = __importDefault(require("../Controllers/blogController"));
const router = express_1.default.Router();
router.post("/createBlog", authMiddleware_1.default.authenticateToken, blogController_1.default.saveBlog);
router.put("/updateBlog/:id", authMiddleware_1.default.authenticateToken, blogController_1.default.updateBlog);
router.get("/fetchBlog/:id", authMiddleware_1.default.authenticateToken, blogController_1.default.fetchBlog);
router.get("/fetchBlogs", authMiddleware_1.default.authenticateToken, blogController_1.default.fetchBlogs);
exports.default = router;
