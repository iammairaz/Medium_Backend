import express from "express";
import cors from "cors";
import config from "./Config/index";
import userRoute from "./Routes/userRoute";
import blogRoute from "./Routes/blogRoute";
import Config from "./Config/index";

const app = express();
const PORT = process.env.PORT;
// config.connectDb();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);

app.listen(Config.LISTENING_PORT, () => {
    console.log(`Listening on Port ${Config.LISTENING_PORT}`)
})

