import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
    MenuItemContiner,
    ContentContainer,
    TitleText,
    SubtitleSpan,
    BackgroundImageContainer
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContiner
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);