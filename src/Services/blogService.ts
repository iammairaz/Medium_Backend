import Config from "../Config";

const addBlog = async (title: string, content: string, authorId: string) => {
    const blog = await Config.prisma.post.create({
        data: {
            title: title,
            content: content,
            authorId: authorId
        }
    })
    if (!blog) {
        return {
            status: 400,
            messge: "Something went wrong not able to create Blog"
        }
    } else {
        return {
            status: 200,
            messge: "Successfully created Blog",
            data: blog
        }
    }
}

const updateBlog = async (blogId: string, title: string, content: string) => {
    const blog = await Config.prisma.post.update({
        where: {
            id: blogId
        },
        data: {
            title: title,
            content: content
        }
    })
    if (!blog) {
        return {
            status: 204,
            message: "No Data Available"
        }
    } else {
        return {
            status: 200,
            message: "Updated Successfully",
            data: blog
        }
    }
}
const fetchBlog = async (blogId: string) => {
    const blog = await Config.prisma.post.findFirst({
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
    })
    if (!blog) {
        return {
            status: 204,
            message: "No Data Available"
        }
    } else {
        return {
            status: 200,
            message: "Successfull",
            data: blog
        }
    }
}
const fetchBlogs = async (pageInde?: number, pageSize?: number) => {
    const blogs = await Config.prisma.post.findMany({
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
        }
    } else {
        return {
            status: 200,
            message: "Successfull",
            data: blogs
        }
    }
}
export default {
    addBlog,
    updateBlog,
    fetchBlog,
    fetchBlogs
}