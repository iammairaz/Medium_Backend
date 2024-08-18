import { SigninInput, SignupInput } from "@mairaz457/medium-common";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../Config/index";

const signup = async (reqObj: SignupInput) => {
    try {
        const { name, password, email } = reqObj;
        let user;
        user = await config.prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user) {
            return {
                status: 401,
                message: "User already Exists, Please login with valid credentials"
            }
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            user = await config.prisma.user.create({
                data: {
                    email: email,
                    password: hashedPassword,
                    name: name
                }
            })
            const token = jwt.sign({ userName: name }, config.JWTSECRETTOKEN, { expiresIn: '1h' });
            return {
                jwt: token
            }
        }
    } catch (e) {
        console.log(e);
        return {
            status: 500,
            message: "Something went wrong while signup"
        }
    }
}
const signin = async (reqObj: SigninInput) => {
    const { email, password } = reqObj;
    const user = await config.prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if (!user) {
        return {
            status: 400,
            message: "User not found, Please signup first"
        }
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
        return {
            status: 404,
            message: "Invalid Password"
        }
    }
    const token = jwt.sign({ userName: user.name, userId: user.id }, config.JWTSECRETTOKEN, { expiresIn: '1h' });
    return {
        status: 200,
        jwt: token
    }
}

export default {
    signup,
    signin
};