import React from 'react';

import {
    CollectionItemsContainer,
    CollectionImageContainer,
    CollectionFooterContainer,
    CollectionFooterName,
    CollectionFooterPrice
} from './collection-items.styles';

const CollectionItem = ({ name, price, imageUrl }) => (
    <CollectionItemsContainer>
        <CollectionImageContainer className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <CollectionFooterName>{name}</CollectionFooterName>
            <CollectionFooterPrice>{price}</CollectionFooterPrice>
        </CollectionFooterContainer>
    </CollectionItemsContainer>
);

export default CollectionItem;