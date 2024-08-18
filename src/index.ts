import express from "express";
import cors from "cors";
import config from "./Config/index";
import dotenv from "dotenv";
import userRoute  from "./Routes/userRoute";
import blogRoute  from "./Routes/blogRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
// config.connectDb();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog",blogRoute);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})

