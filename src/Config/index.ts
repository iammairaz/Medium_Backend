import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config()
const prisma = new PrismaClient();
const connectDb = async () => {
    try {
        await prisma.$connect()
        console.log("Database Connected ...")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
const JWTSECRETTOKEN: string = process.env.JWT_SECET_TOKEN || ""

export default {
    connectDb,
    JWTSECRETTOKEN,
    prisma
}