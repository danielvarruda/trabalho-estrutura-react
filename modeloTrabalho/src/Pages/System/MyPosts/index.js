import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../../../Components/System/Post";
import OutDefault from "../../../Components/Templates/OutDefault";

const MyPosts = () => {

    const [posts, setPosts] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(() => {
        const getMyPosts = async () => {
            await axios ({
                method: "GET",
                url: `${process.env.REACT_APP_URL_API}/posts/${token}`
            }).then((success) => {
                const data = success.data;
                setPosts(data);
            });
        }

        getMyPosts();
    }, [token]);

    return (
        <OutDefault>
            {posts.map(post => {
                return (
                    <Post post={post} key={post.id} />
                )
            })}
        </OutDefault>
    );
}

export default MyPosts;