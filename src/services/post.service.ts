import { Post } from "@/models/post";
import { api } from "@/utils/api"

export const getPosts = async () => {
    // get all posts
    return await api.get<Post[]>('/api/posts', {
        params: {
            populate: "*"
        },
        transformResponse: (res) => {
            const resData = JSON.parse(res);
            return resData.data;
        }
    });
}

// get post by slug
export const getPost = async (slug: string) => {
    return await api.get<Post>('/api/posts', {
        params: {
            populate: "*",
            "filters[slug][$eq]": slug
        },
        transformResponse: (res) => {
            const resData = JSON.parse(res);
            return resData.data[0] ?? {};
        }
    });
}