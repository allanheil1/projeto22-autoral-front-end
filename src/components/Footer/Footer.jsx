import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext.jsx';
import {
	MdOutlineTableRestaurant,
	MdOutlineRestaurant
} from "react-icons/md";
import * as s from './style.jsx';

export default function Footer() {

    const { token, user } = useContext(UserContext);

	return (
		<s.FooterStyle>
			<Link to="/home">
				<MdOutlineRestaurant size={33} />
			</Link>

			<Link to="/tables">
				<MdOutlineTableRestaurant size={40} />
			</Link>
		</s.FooterStyle>
	);
}