import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    // Funcionalidades
    const newAccount = async () => {

        await axios({
            method: "POST",
            url: `http://localhost:8000/api/users`,
            data: {
                email,
                name,
                password: pass
            }
        }).then((success) => {
            alert(success.data.mensagem);
            window.location = '/login';
        });
    }

    return (
        <>
            <h1>Nova Conta</h1>
            
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br/>

            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>

            <input
                type="text"
                placeholder="Senha"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            /><br/>
            
            <button onClick={() => newAccount()}>
                Registrar
            </button>
        </>
    );
}

export default Register;