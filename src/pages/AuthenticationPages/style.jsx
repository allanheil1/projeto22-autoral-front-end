import styled from 'styled-components';
import { patternTheme as theme } from '../../globalstyle/pattern';

export const AuthenticationPageStyle = styled.div`
  width: 100%;
  height: 100vh;
	display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.lightGreen};

  h1{
    color: ${theme.authFontColor};
  }

  img{
    height: 200px;
    margin-bottom: -40px;
  }

  input{
    font-family: 'Roboto', sans-serif;
    height: 45px;
    width: 303px;
    margin-bottom: 6px;
    background: ${theme.colors.white};
    border-color: ${theme.colors.primaryGreen};
    border: 1px solid;
    border-radius: 5px;
    font-size: 16px;
    color: ${theme.colors.darkGreen};
    padding-left: 10px;
    ::placeholder{
      color: ${theme.colors.lightGray};
      font-size: 16px;
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
    color: ${theme.colors.white};
    text-align: center;
    margin-bottom: 25px;
    background-color: ${theme.colors.primaryGreen};
  }
  button:disabled{
    opacity: 0.75;
  }
`

export const Message = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${theme.colors.primaryGreen};
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

export const LogoWrapper = styled.div`
  width: 100%;
  font-family: 'Courgette', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  img{
    height: 70px;
  }
  h1{
    color: ${theme.colors.darkGreen};
    margin-top: 40px;
    font-size: 38px;
  }
`

export const CheckBoxWrapper = styled.div`
  display: flex;
`

export const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  input{
    height: 20px;
  }
`
