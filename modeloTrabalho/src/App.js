import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import HeaderPage from "./Components/Header/HeaderPage";

import Home from "./Pages/Geral/Home";
import Register from "./Pages/Geral/Register";
import Login from "./Pages/Geral/Login";
import Logout from "./Pages/Geral/Logout";

import AllPosts from "./Pages/System/AllPosts";
import NewPost from "./Pages/System/NewPost";
import MyPosts from "./Pages/System/MyPosts";

const App = () => {

	const [logged, setLogged] = useState(true);

	let token = localStorage.getItem("token");

	if (token === undefined) {
		localStorage.removeItem("token");
		token = null;
	}

	useEffect(() => {
		const checkLogin = () => {
			if (token) {
				axios({
					method: "POST",
					url: `${process.env.REACT_APP_URL_API}/auth/validate`,
					data: { token }
				}).then((success) => {
					if (success.data.success) {
						setLogged(true);
					} else {
						setLogged(false);
						localStorage.removeItem("token");
						
						let local = window.location.href;
						window.location.href = local;
					}
				}).catch(error => {
					setLogged(false);
					localStorage.removeItem("token");
					
					let local = window.location.href;
					window.location.href = local;
				})
			} else {
				setLogged(false);
                localStorage.removeItem("token");
            }
		}

		checkLogin();
	}, [token]);

	const systemRoute = props => {
		if (logged) {
			return props;
		} else if (token) {
			axios({
				method: "POST",
				url: `${process.env.REACT_APP_URL_API}/auth/validate`,
				data: { token }
			}).then((success) => {
				if (success.data.success) {
					return props;
				} else {
					return <Navigate to="logout"/>
				}
			}).catch(error => {
				return <Navigate to="/logout" />
			})
		} else {
			return <Navigate to="/logout" />
		}
	}

	return (
		<>
			<BrowserRouter>

				<HeaderPage logged={logged} />
                
                <Routes>

					{/* Tela Inicial */}
                    <Route path="/" element={<Home/>} />
					<Route path="/cadastro" element={<Register/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/logout" element={<Logout/>} />

					{/* System */}
					<Route path="/posts" element={systemRoute(<AllPosts/>)} />
					<Route path="/posts/novo" element={systemRoute(<NewPost/>)} />
					<Route path="/posts/meus" element={systemRoute(<MyPosts/>)} />
					
				</Routes>

            </BrowserRouter>
		</>
	)
    
}

export default App;
