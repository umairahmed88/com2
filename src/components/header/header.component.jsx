import React from 'react';

import { ReactComponent as Logo } from '../../asset/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import {
    HeaderContainer,
    LogoLink,
    OptionsContainer,
    OptionsLink
} from './header.styles';

const Header = ({ currentUser }) => (
    <HeaderContainer>
        <LogoLink to='/'>
            <Logo />
        </LogoLink>
        <OptionsContainer>
            <OptionsLink to='/shop'>SHOP</OptionsLink>
            <OptionsLink to='/contact'>CONTACT</OptionsLink>
            {
                currentUser ? 
                <OptionsLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionsLink>
                :
                <OptionsLink to='/signin'>SIGN IN</OptionsLink>
            }
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;