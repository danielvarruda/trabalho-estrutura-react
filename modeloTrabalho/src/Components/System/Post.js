import React from "react";
import {FormateDateHour} from "../../Services/CustomFormatations";

const Post = props => {
    return (
        <div>
            <h3>{props.post.name}</h3>
            <p>{props.post.text}</p>
            <small>{FormateDateHour(props.post.created_at)}</small>
        </div>
    );
}

export default Post;