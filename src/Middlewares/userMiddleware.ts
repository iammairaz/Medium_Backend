import { signupInput, signinInput } from "@mairaz457/medium-common";
import { NextFunction, Request, Response } from "express";

const signup = async (req: Request, res: Response, next: NextFunction) => {
    const { success } = signupInput.safeParse(req.body);
    if (!success) {
        return res.status(403).json({
            message: "Invalid Inputs"
        })
    }
    next();
}
const signin = async (req: Request, res: Response, next: NextFunction) => {
    const { success } = signinInput.safeParse(req.body);
    if (!success) {
        return res.status(403).json({
            message: "Invalid Inputs"
        })
    }
    next();
}

export default {
    signup,
    signin
}