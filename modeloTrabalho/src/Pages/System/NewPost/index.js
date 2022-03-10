import React, { useState } from "react";
import axios from "axios";
import OutDefault from "../../../Components/Templates/OutDefault";

const NewPost = () => {
    const [text, setText] = useState('');
    let token = localStorage.getItem('token');

    const newPost = async () => {
        await axios ({
            method: "POST",
            url: `${process.env.REACT_APP_URL_API}/posts`,
            data: {
                token,
                text
            }
        }).then((success) => {
            console.log(success);
            if (success.data.mensagem) {
                alert(success.data.mensagem);
                setText('');
            } else {
                alert(success.data.error);
            }
        });
    }

    return (
        <OutDefault>
            <div className="new_post">
                <textarea
                    placeholder="Escreva aqui..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea><br/>
                
                <button onClick={() => newPost()} className="submit">
                    Postar
                </button>
            </div>
        </OutDefault>
    )
}

export default NewPost;