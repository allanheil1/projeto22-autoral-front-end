import styled from 'styled-components';
import { patternTheme as theme } from '../../globalstyle/pattern';

export const AuthenticationPageStyle = styled.div`
  width: 100%;
  height: 100vh;
	display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.authBGColor};

  h1{
    color: ${theme.authFontColor};
  }

  img{
    height: 200px;
    margin-bottom: -40px;
  }

  input{
    height: 45px;
    width: 303px;
    margin-bottom: 6px;
    background: ${theme.authBGColor};
    border-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: ${theme.authFontColor};
    padding-left: 10px;
    ::placeholder{
      color: #7C7C7C;
      font-size: 20px;
      text-decoration: none;
    }

  }

  button{
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 303px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: ${theme.authBGColor};
    text-align: center;
    margin-bottom: 25px;
    background-color: #FFFFFF;
  }
  button:disabled{
    opacity: 0.75;
  }
`

export const Message = styled.div`
  font-family: 'Roboto', sans-serif;
  color:${theme.authFontColor};
  font-size: 15px;
  text-decoration: underline;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`

