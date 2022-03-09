import axios from "axios";
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);

    const loginAccount = () => {
        let data = {
            email,
            password: pass
        }

        axios.post(
            `http://localhost:8000/api/login`, data
        ).then(success => {

            if (success.data.success) {
                
                alert("Login realizado com sucesso!");
                localStorage.setItem("token", success.data.token);
                
                window.location.href = '/posts';

            } else if (success.data.error) {
                
                alert(success.data.error);
                localStorage.removeItem("token");

            }

        }).catch(error => {
            console.log("Deu Erro: ", error);
            alert("Erro ao realizar login");
        });
    };

    return (
        <>
            <h1>Login</h1>
            
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br/>

            <input
                type="text"
                placeholder="Senha"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            /><br/>
            
            <button onClick={() => loginAccount()}>
                Login
            </button>
        </>
    );
}

export default Login;
