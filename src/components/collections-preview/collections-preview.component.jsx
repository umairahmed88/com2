import React from 'react';

import CollectionItem from '../collection-item/collection-items.component';

import {
    CollectionsPreviewContainer,
    PreviewContainer,
    CollectionTitle
} from './collections-preview.styles';

const CollectionsPreview = ({ title, items }) => (
    <CollectionsPreviewContainer>
        <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
        <PreviewContainer>
            {
                items
                    .filter((item, idx) => idx < 4 )
                    .map(({ id, ...otherProps }) => (
                    <CollectionItem key={id} {...otherProps} />
                ))
            }
        </PreviewContainer>
    </CollectionsPreviewContainer>
);

export default CollectionsPreview;