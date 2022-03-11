import React from "react";

const LikesList = (props) => {
    return (
        <>
            <ul className="like_list">
                {props.likes.map(like => {
                    return (
                        <li key={like.id}>{ like.name }</li>
                    );
                })}
            </ul>
        </>
    );
}

export default LikesList;