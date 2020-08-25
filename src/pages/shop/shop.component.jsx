import React from 'react';
import SHOP_DATA from '../../redux/shop/shop.data';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component';

import { ShopPageContainer } from './shop.styles';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
        <ShopPageContainer>
            {
                collections.map(({ id, ...otherProps}) => (
                    <CollectionsPreview key={id} {...otherProps} />
                ))
            }
        </ShopPageContainer>)
    }
};

export default ShopPage;