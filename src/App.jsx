import { Routes, Route } from 'react-router-dom';
import GlobalStyle from "./globalstyle/globalStyle";
import SignInPage from "./pages/AuthenticationPages/SignInPage";
import SignUpPage from "./pages/AuthenticationPages/SignUpPage";
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
				<Route path="/" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
			</Routes>
    </>
  )
}

export default App
