import React from 'react';

import { ReactComponent as Logo } from '../../asset/crown.svg';

import {
    HeaderContainer,
    LogoLink,
    OptionsContainer,
    OptionsLink
} from './header.styles';

const Header = () => (
    <HeaderContainer>
        <LogoLink to='/'>
            <Logo />
        </LogoLink>
        <OptionsContainer>
            <OptionsLink to='/shop'>SHOP</OptionsLink>
            <OptionsLink to='/contact'>CONTACT</OptionsLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;