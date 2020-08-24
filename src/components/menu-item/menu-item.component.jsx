import React from 'react';

import { 
    MenuItemContiner,
    ContentContainer,
    TitleText,
    SubtitleSpan,
    BackgroundImageContainer
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl }) => (
    <MenuItemContiner
     size={size}
    >
        <BackgroundImageContainer 
            className='background-image'
            imageUrl={imageUrl}
        />
        <ContentContainer>
            <TitleText>{title.toUpperCase()}</TitleText>
            <SubtitleSpan>Shop Now</SubtitleSpan>
        </ContentContainer>
    </MenuItemContiner>
);

export default MenuItem;