import { NextFunction, Request, Response } from "express";
import blogService from "../Services/blogService";

const saveBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.headers['x-user-id'] as string || "";
        const body = req.body;
        const response = await blogService.addBlog(body.title, body.content, userId);
        if (response?.status === 200) {
            return res.status(200).json({
                response
            })
        }
    } catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while creating Blog" })
    }
}
const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const blogId = req.params.id;
        const response = await blogService.updateBlog(blogId,body.title, body.content);
        if (response?.status === 200) {
            return res.status(200).json({
                response
            })
        }
    } catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while updating Blog" })
    }
}
const fetchBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const blogId = req.params.id;
        const response = await blogService.fetchBlog(blogId);
        if (response?.status === 200) {
            return res.status(200).json({
                response
            })
        }
    } catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while fetching Blog" })
    }
}
const fetchBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const response = await blogService.fetchBlogs();
        if (response?.status === 200) {
            return res.status(200).json({
                response
            })
        }
    } catch (e) {
        console.log(e);
        return res.send(500).json({ message: "Something went wrong while fetching Blogs" })
    }
}

export default {
    saveBlog,
    updateBlog,
    fetchBlog,
    fetchBlogs
}