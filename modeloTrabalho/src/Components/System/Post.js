import axios from "axios";
import React, { useEffect, useState } from "react";
import {FormateDateHour} from "../../Services/CustomFormatations";

const Post = props => {
    const [like, setLike] = useState(null);
    let token = localStorage.getItem('token');

    useEffect(() => {
        setLike(props.post.likes);
    }, [token]);

    const likedPost = async (id) => {
        await axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_API}/posts/like`,
            data: {
                token,
                post_id: id
            }
        }).then((success) => {
            if(success.data.likes !== undefined) {
                setLike(success.data.likes);
            }
        });
    }

    return (
        <div className="reutter_message">
            <div className="post_info">
                <h1>{props.post.name}</h1>
                <p>{props.post.text}</p>
                <small>{FormateDateHour(props.post.created_at)}</small><br/>
            </div>

            <div className="post_actions">
                <p>
                    {like} curtidas
                </p>

                <button onClick={(e) => likedPost(props.post.id)}>
                    Curtir
                </button>
            </div>
        </div>
    );
}

export default Post;