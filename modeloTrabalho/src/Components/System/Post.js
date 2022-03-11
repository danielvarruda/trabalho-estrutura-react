import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";
import {FormateDateHour} from "../../Services/CustomFormatations";

import LikesList from "../../Components/System/LikesList";

const Post = props => {
    const [like, setLike] = useState([]);
    const [modalSeeOrder, setModalSeeOrder] = useState(false);

    let token = localStorage.getItem('token');

    useEffect(() => {
        setLike(props.post.like_list.length);
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

            if(success.data.action !== undefined) {
                
                if (success.data.action === "remove") 
                {
                    const new_list = props.post.like_list.filter(list => {
                        return list.id != success.data.alteration.user_id;
                    });

                    props.post.like_list = new_list;
                }

                else if (success.data.action === "insert") 
                {
                    props.post.like_list.unshift({
                        'id': success.data.alteration.user_id,
                        'name': success.data.alteration.user_name
                    });

                    console.log(props.post.like_list);
                }
                
            }
        });

        setLike(props.post.like_list.length);
    }

    return (
        <>
            <div className="reutter_message">
                <div className="post_info">
                    <h1>{props.post.name}</h1>
                    <p>{props.post.text}</p>
                    <small>{FormateDateHour(props.post.created_at)}</small><br/>
                </div>

                <div className="post_actions">
                    <p>
                        {(like > 0) 
                        ?
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setModalSeeOrder(true);
                                }}
                            >
                                {like} curtidas
                            </a>
                        :
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                0 curtida
                            </a>
                        }
                    </p>

                    <button onClick={(e) => likedPost(props.post.id)}>
                        Curtir
                    </button>
                </div>
            </div>

            <CustomModal
                show={modalSeeOrder}
            >
                <LikesList likes={props.post.like_list} />
            </CustomModal>
        </>
    );
}

export default Post;