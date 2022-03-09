import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../../../Components/System/Post";

const MyPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            await axios ({
                method: "GET",
                url: `http://localhost:8000/api/posts`
            }).then((success) => {
                const data = success.data;
                setPosts(data);
            });
        }

        getPosts();
    }, []);

    return (
        <>
            <h1>Posts</h1>

            {posts.map(post => {
                return (
                    <React.Fragment key={post.id}>
                        <Post post={post} />
                    </React.Fragment>
                )
            })}
        </>
    );
}

export default MyPosts;