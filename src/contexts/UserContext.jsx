import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
	const [token, setToken] = useState(null);
	const [restaurantLogo, setRestaurantLogo] = useState("");
	const [user, setUser] = useState(null);
	const [visibleHeader, setVisibleHeader] = useState(false);
	function checkLogin(){
		console.log('checkando login...');
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
				restaurantLogo,
				setRestaurantLogo,
				visibleHeader,
				setVisibleHeader,
				checkLogin
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
