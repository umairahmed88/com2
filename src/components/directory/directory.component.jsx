import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

class DirectoryMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: ''
        };
    }

    render() {
        return (
            <DirectoryMenuContainer>
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))}
            </DirectoryMenuContainer>
        );
    }
};



export default DirectoryMenu;