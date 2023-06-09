import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import logo from '../../assets/logo.svg';
import { AuthenticationPageStyle, Message, Form, LogoWrapper } from "./style";
import { UserContext } from "../../contexts/UserContext.jsx";

export default function SignInPage() {
	const navigate = useNavigate();
	const { setToken } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);
	const [signInData, setSignInData] = useState({
		login: '',
		password: '',
	});

	useEffect(()=>{
		//setVisibleHeader(false);
		// eslint-disable-next-line
	},[]);

	function SignInRequest(e) {
		e.preventDefault();
		setIsLoading(true);
		const promise = axios.post(`${import.meta.env.VITE_API_URL}/signin`, signInData);
		promise.then((res) => {
			setIsLoading(false);
			setToken(res.data.token);

			navigate("/home");
		});
		promise.catch((err) => {
			setIsLoading(false);
			const errorMsg = err.response.statusText;
			alert(`Erro: ${errorMsg}`);
		});
	}

	function OnChange(e) {
		setSignInData({ ...signInData, [e.target.name]: e.target.value });
	}

	return (
		<AuthenticationPageStyle>
			<LogoWrapper>
				<img src={logo}/>
				<h1>Table Tracker</h1>
			</LogoWrapper>
			<Form onSubmit={SignInRequest}>
				<input
					type="login"
					placeholder="Login"
					value={signInData.login}
					name="login"
					onChange={OnChange}
					required
					disabled={isLoading}
				/>
				<input
					type="password"
					placeholder="Password"
					value={signInData.password}
					name="password"
					onChange={OnChange}
					required
					disabled={isLoading}
				/>
				<button type="submit" disabled={isLoading}>
					Sign-In
				</button>
			</Form>

			<Link to={isLoading ? "" : "/signup"}>
				<Message>Don't have an account? Sign-Up!</Message>
			</Link>
		</AuthenticationPageStyle>
	);
}
