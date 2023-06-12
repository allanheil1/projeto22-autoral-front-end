import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext.jsx';
import * as s from './style.jsx';

export default function HomePage() {

    const { token, user } = useContext(UserContext);

    return(
        <s.HomePageStyle>
            <h1>{token}</h1>
            <h2>{user.name}</h2>
        </s.HomePageStyle>
    );
}