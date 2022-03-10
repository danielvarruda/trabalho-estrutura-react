import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../../../Components/System/Post";
import OutDefault from "../../../Components/Templates/OutDefault";

const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            await axios ({
                method: "GET",
                url: `${process.env.REACT_APP_URL_API}/posts`
            }).then((success) => {
                const data = success.data;
                setPosts(data);
            });
        }

        getPosts();
    }, []);

    return (
        <OutDefault>
            {posts.map(post => {
                return (
                    <React.Fragment key={post.id}>
                        <Post post={post} />
                    </React.Fragment>
                )
            })}
        </OutDefault>
    );
}

export default AllPosts;