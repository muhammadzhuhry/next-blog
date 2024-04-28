'use client'

import { Post } from "@/models/post";
import { getPosts } from "@/services/post.service";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

const Posts = () => {
    // const { data } = await getPosts();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPosts().then((res) => {
            setPosts(res.data);
        });
    }, []);

    return (
        <>
            <div>
                {
                    posts.map((post, i) => (<PostItem key={i} post={post} />))
                }
            </div>
        </>
    )
}

export default Posts;