// General
import React from 'react';

// Router
import {withRouter} from 'react-router-dom';

// Styles
import { MenuItemContainer, BackgroundImage, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles';

/* Component for menu item that is the container of the items that in the home page and will include picture */
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage className='background-image' imageUrl={imageUrl} />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);