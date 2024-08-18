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
const Config_1 = __importDefault(require("../Config"));
const addBlog = (title, content, authorId) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield Config_1.default.prisma.post.create({
        data: {
            title: title,
            content: content,
            authorId: authorId
        }
    });
    if (!blog) {
        return {
            status: 400,
            messge: "Something went wrong not able to create Blog"
        };
    }
    else {
        return {
            status: 200,
            messge: "Successfully created Blog",
            data: blog
        };
    }
});
const updateBlog = (blogId, title, content) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield Config_1.default.prisma.post.update({
        where: {
            id: blogId
        },
        data: {
            title: title,
            content: content
        }
    });
    if (!blog) {
        return {
            status: 204,
            message: "No Data Available"
        };
    }
    else {
        return {
            status: 200,
            message: "Updated Successfully",
            data: blog
        };
    }
});
const fetchBlog = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield Config_1.default.prisma.post.findFirst({
        where: {
            id: blogId
        },
        select: {
            id: true,
            title: true,
            content: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });
    if (!blog) {
        return {
            status: 204,
            message: "No Data Available"
        };
    }
    else {
        return {
            status: 200,
            message: "Successfull",
            data: blog
        };
    }
});
const fetchBlogs = (pageInde, pageSize) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield Config_1.default.prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });
    if (!blogs) {
        return {
            status: 400,
            message: "Something went wrong not able to fetch blogs"
        };
    }
    else {
        return {
            status: 200,
            message: "Successfull",
            data: blogs
        };
    }
});
exports.default = {
    addBlog,
    updateBlog,
    fetchBlog,
    fetchBlogs
};
