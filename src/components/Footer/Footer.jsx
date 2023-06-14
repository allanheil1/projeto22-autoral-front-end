import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext.jsx';
import * as s from './style.jsx';

export default function Footer() {

    const { token, user } = useContext(UserContext);

    return(
        <s.FooterStyle>
            <h1>{token}</h1>
        </s.FooterStyle>
    );
}