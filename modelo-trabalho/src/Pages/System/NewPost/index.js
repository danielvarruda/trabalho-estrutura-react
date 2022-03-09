import React, { useState } from "react";
import axios from "axios";

const NewPost = () => {
    const [text, setText] = useState('');
    let token = localStorage.getItem('token');

    const newPost = async () => {
        await axios ({
            method: "POST",
            url: `http://localhost:8000/api/posts`,
            data: {
                token,
                text
            }
        }).then((success) => {
            alert(success.data.mensagem);
            setText('');
        });
    }

    return (
        <>
            <h1>Novo Post</h1>

            <textarea
                placeholder="Escreva aqui..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea><br/>
            
            <button onClick={() => newPost()}>
                Postar
            </button>
        </>
    )
}

export default NewPost;