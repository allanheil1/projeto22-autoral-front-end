import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext.jsx';

import { AuthenticationPageStyle, Message, Form } from './style'

export default function SignUpPage() {
    //const { setVisibleHeader } = useContext(UserContext);
    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
      isAdm: true,
      login: '',
      name: '',
      password: '',
      code: 0,
    });
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
        //setVisibleHeader(false);
        // eslint-disable-next-line
    },[]);

    function SignUpRequest(e){
      e.preventDefault();
      setIsLoading(true);
      console.log(signUpData);
      const promise = axios.post(`${import.meta.env.VITE_API_URL}/signup`, signUpData);
      promise.then(() => {
        setIsLoading(false);
        navigate('/');
      });
      promise.catch((err) => {
        setIsLoading(false);
        const errorMsg = err.response.statusText;
        alert(`Erro: ${errorMsg}`);
      })
    }

    function OnChange(e) {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        if (name === 'isAdm') {
          if(!signUpData.isAdm){
            setSignUpData((prevData) => ({
              ...prevData,
              isAdm: checked,
            }));
          }
        } else if (name === 'isEmployee') {
          if(signUpData.isAdm){
            setSignUpData((prevData) => ({
              ...prevData,
              isAdm: !checked,
            }));
          }
        }
      } else {
        setSignUpData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }
    

    return (
      <AuthenticationPageStyle>

        <Form onSubmit={SignUpRequest}>
          <input
              type="checkbox"
              checked={signUpData.isAdm}
              name="isAdm"
              onChange={OnChange}
              disabled={isLoading}
            />
          <h1>Administrator</h1>
            <input
              type="checkbox"
              checked={!signUpData.isAdm}
              name="isEmployee"
              onChange={OnChange}
              disabled={isLoading}
            />
          <h1>Employee</h1>
          <input 
            type='login' placeholder='Login'
            value={signUpData.login} name='login'
            onChange={OnChange} required
            disabled={isLoading}
          />
          <input 
            type='password' placeholder='Password'
            value={signUpData.password} name='password'
            onChange={OnChange} required
            disabled={isLoading}
          />
          <input 
            type='text' placeholder='Name'
            value={signUpData.name} name='name'
            onChange={OnChange} required
            disabled={isLoading}
          />
          {signUpData.isAdm ? false : (
            <input
              type="text"
              placeholder="Restaurant Code"
              value={signUpData.code}
              name="code"
              onChange={OnChange}
              required={!signUpData.isAdm}
              disabled={isLoading}
            />
          )}

          <button type='submit' disabled={isLoading}>
                Sign-Up
          </button>
        </Form>

        <Link to={isLoading ? '' : '/'}>
          <Message>
            Already have an account? Sign-in!
          </Message>
        </Link>
      </AuthenticationPageStyle>
    );
}
