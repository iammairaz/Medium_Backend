"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../Services/userService"));
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = yield userService_1.default.signup(body);
        if (response.status === 200) {
            return res.status(200).json({
                data: response.jwt
            });
        }
        else {
            return res.status(response.status || 401).json({
                error: response.message
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while signup" });
    }
});
const signin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = yield userService_1.default.signin(body);
        if (response.status === 200) {
            return res.status(200).json({
                data: response.jwt
            });
        }
        else {
            return res.status(response.status || 401).json({
                error: response.message
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while signin" });
    }
});
exports.default = {
    signup,
    signin
};
