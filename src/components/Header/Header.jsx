import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

import * as s from './style.jsx';
import Logo from '../../assets/logo.svg';

export default function Header({restaurantLogo}) {

    return(
        <s.HeaderStyle>

            <s.PhotoStyle>
                <img src='data:image/png;base64,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'/>
            </s.PhotoStyle>

            <s.LogoStyle>
                <img src={Logo} alt='restaurant logo'/>
            </s.LogoStyle>

            <s.LogOutStyle>
                <Link to='/'>
                    <MdLogout size={30} />
                </Link>
            </s.LogOutStyle>

        </s.HeaderStyle>
    );
}