"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoute_1 = __importDefault(require("./Routes/userRoute"));
const blogRoute_1 = __importDefault(require("./Routes/blogRoute"));
const index_1 = __importDefault(require("./Config/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/user", userRoute_1.default);
app.use("/api/v1/blog", blogRoute_1.default);
app.listen(index_1.default.LISTENING_PORT, () => {
    console.log(`Listening on Port ${index_1.default.LISTENING_PORT}`);
});
