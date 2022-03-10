import axios from "axios";
import React, { useState } from "react";
import OutDefault from "../../Components/Templates/OutDefault";

const Login = () => {
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);

    const loginAccount = () => {
        let data = {
            email,
            password: pass
        }

        axios.post(
            `${process.env.REACT_APP_URL_API}/login`, data
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
        <OutDefault>
            <div className="page_register">
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
                
                <button 
                    onClick={() => loginAccount()}
                    className="submit submit-register"
                >
                    Login
                </button>

                <br/>
            </div>
        </OutDefault>
    );
}

export default Login;
