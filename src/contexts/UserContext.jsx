import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	function checkLogin(){
		if(!token){
			alert("You need to be logged in to access this page");
			window.location.href = "/"
		}
	}

	return (
		<UserContext.Provider
			value={{
				token,
				setToken,
				user,
				setUser,
				checkLogin
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
