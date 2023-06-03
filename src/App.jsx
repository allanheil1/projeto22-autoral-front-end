import {Routes, Route } from 'react-router-dom';
import SignInPage from "./pages/AuthenticationPages/SignInPage";
import SignUpPage from "./pages/AuthenticationPages/SignUpPage";
import GlobalStyle from "./globalstyle/globalStyle";

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
				<Route path="/" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
			</Routes>
    </>
  )
}

export default App
