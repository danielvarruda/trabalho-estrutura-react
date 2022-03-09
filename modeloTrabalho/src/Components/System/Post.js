import React from "react";
import {FormateDateHour} from "../../Services/CustomFormatations";

const Post = props => {
    return (
        <div className="reutter_message">
            <h1>{props.post.name}</h1>
            <p>{props.post.text}</p>
            <small>{FormateDateHour(props.post.created_at)}</small>
        </div>
    );
}

export default Post;