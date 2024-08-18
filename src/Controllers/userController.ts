import { NextFunction, Response, Request } from "express";
import userService from "../Services/userService";

interface apiResponse {
    status?: number;
    message?: string;
    jwt?: string;
    data?: any;
}
const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const response: apiResponse = await userService.signup(body);
        if (response.status === 200) {
            return res.status(200).json({
                data: response.jwt
            })
        } else {
            return res.status(response.status || 401).json({
                error: response.message
            })
        }
    } catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while signup" })
    }
}
const signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const response: apiResponse = await userService.signin(body);
        if (response.status === 200) {
            return res.status(200).json({
                data: response.jwt
            })
        } else {
            return res.status(response.status || 401).json({
                error: response.message
            })
        }
    } catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while signin" })
    }
}

export default {
    signup,
    signin
}