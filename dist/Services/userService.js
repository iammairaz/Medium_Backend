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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../Config/index"));
const signup = (reqObj) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, password, email } = reqObj;
        let user;
        user = yield index_1.default.prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (user) {
            return {
                status: 401,
                message: "User already Exists, Please login with valid credentials"
            };
        }
        else {
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            user = yield index_1.default.prisma.user.create({
                data: {
                    email: email,
                    password: hashedPassword,
                    name: name
                }
            });
            const token = jsonwebtoken_1.default.sign({ userName: name }, index_1.default.JWTSECRETTOKEN, { expiresIn: '1h' });
            return {
                jwt: token
            };
        }
    }
    catch (e) {
        console.log(e);
        return {
            status: 500,
            message: "Something went wrong while signup"
        };
    }
});
const signin = (reqObj) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = reqObj;
    const user = yield index_1.default.prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (!user) {
        return {
            status: 400,
            message: "User not found, Please signup first"
        };
    }
    const isPassword = yield bcryptjs_1.default.compare(password, user.password);
    if (!isPassword) {
        return {
            status: 404,
            message: "Invalid Password"
        };
    }
    const token = jsonwebtoken_1.default.sign({ userName: user.name, userId: user.id }, index_1.default.JWTSECRETTOKEN, { expiresIn: '1h' });
    return {
        status: 200,
        jwt: token
    };
});
exports.default = {
    signup,
    signin
};
