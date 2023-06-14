import { Link } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import * as s from './style.jsx';
import Logo from '../../assets/logo.svg';

export default function Header({restaurantLogo}) {

    return(
        <s.HeaderStyle>

            <s.PhotoStyle>
                <img src={restaurantLogo}/>
            </s.PhotoStyle>

            <s.LogoStyle>
                <img src={Logo} alt='restaurant logo'/>
            </s.LogoStyle>

            <s.LogOutStyle>
                <Link to='/'>
                    <RiLogoutBoxRLine size={30} />
                </Link>
            </s.LogOutStyle>

        </s.HeaderStyle>
    );
}