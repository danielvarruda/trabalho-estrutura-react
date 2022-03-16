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

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <OutDefault>
            <div className="action_post">
                <button
                    onClick={() => refreshPage()}    
                >
                    Buscar novos posts
                </button>
            </div>

            {posts.map(post => <Post post={post} key={post.id} /> )}
        </OutDefault>
    );
}

export default AllPosts;