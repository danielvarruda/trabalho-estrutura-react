import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../../../Components/System/Post";

const MyPosts = () => {

    const [posts, setPosts] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(() => {
        const getMyPosts = async () => {
            await axios ({
                method: "GET",
                url: `http://localhost:8000/api/posts/${token}`
            }).then((success) => {
                const data = success.data;
                setPosts(data);
            });
        }

        getMyPosts();
    }, [token]);

    return (
        <>
            <h1>Meus Posts</h1>

            {posts.map(post => {
                return (
                    <Post post={post} key={post.id} />
                )
            })}
        </>
    );
}

export default MyPosts;