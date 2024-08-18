"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = __importDefault(require("./Routes/userRoute"));
const blogRoute_1 = __importDefault(require("./Routes/blogRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
// config.connectDb();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/user", userRoute_1.default);
app.use("/api/v1/blog", blogRoute_1.default);
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});
