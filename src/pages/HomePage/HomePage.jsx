import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext.jsx';
import * as s from './style.jsx';

export default function HomePage() {

    const { token, setVisibleHeader, checkLogin } = useContext(UserContext);

    useEffect(() => {
        //checkLogin();
        setVisibleHeader(true);
    }, []);

    return(
        <s.HomePageStyle>
            <h1>home</h1>
            <h1>{token}</h1>
        </s.HomePageStyle>
    );
}