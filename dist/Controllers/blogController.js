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
const blogService_1 = __importDefault(require("../Services/blogService"));
const saveBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.headers['x-user-id'] || "";
        const body = req.body;
        const response = yield blogService_1.default.addBlog(body.title, body.content, userId);
        if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
            return res.status(200).json({
                response
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while creating Blog" });
    }
});
const updateBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const blogId = req.params.id;
        const response = yield blogService_1.default.updateBlog(blogId, body.title, body.content);
        if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
            return res.status(200).json({
                response
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while updating Blog" });
    }
});
const fetchBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const blogId = req.params.id;
        const response = yield blogService_1.default.fetchBlog(blogId);
        if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
            return res.status(200).json({
                response
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while fetching Blog" });
    }
});
const fetchBlogs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = yield blogService_1.default.fetchBlogs();
        if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
            return res.status(200).json({
                response
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while fetching Blogs" });
    }
});
exports.default = {
    saveBlog,
    updateBlog,
    fetchBlog,
    fetchBlogs
};
