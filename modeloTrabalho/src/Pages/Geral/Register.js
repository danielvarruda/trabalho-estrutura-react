import React, { useState } from "react";
import axios from "axios";
import OutDefault from "../../Components/Templates/OutDefault";

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    // Funcionalidades
    const newAccount = async () => {

        await axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_API}/users`,
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
        <OutDefault>
            <div className="page_register">
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br/>

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
                    onClick={() => newAccount()}
                    className="submit submit-register"
                >
                    Registrar
                </button>
            </div>
        </OutDefault>
    );
}

export default Register;