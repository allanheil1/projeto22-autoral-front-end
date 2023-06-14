import { Routes, Route } from 'react-router-dom';
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";
import GlobalStyle from "./globalstyle/globalStyle";
import SignInPage from "./pages/AuthenticationPages/SignInPage";
import SignUpPage from "./pages/AuthenticationPages/SignUpPage";
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  const { visibleHeader, restaurantLogo } = useContext(UserContext);

  return (
    <>
      <GlobalStyle />
      {visibleHeader && <Header userPhoto={restaurantLogo}/>}
      <Routes>
				<Route path="/" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
			</Routes>
      {visibleHeader && <Footer />}
    </>
  )
}

export default App
