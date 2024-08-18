"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../Controllers/userController"));
const userMiddleware_1 = __importDefault(require("../Middlewares/userMiddleware"));
const router = express_1.default.Router();
router.post("/signup", userMiddleware_1.default.signup, userController_1.default.signup);
router.post("/signin", userMiddleware_1.default.signin, userController_1.default.signin);
exports.default = router;
