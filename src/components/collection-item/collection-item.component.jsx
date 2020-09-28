// General
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

// Styles
import { CollectionItemContainer, BackgroundImage, CollectionItemFooterContainer, NameContainer, PriceContainer, AddToCartButton } from './collection-item.styles';

/* This is the component for the cards in the shop page its include price, button(Add to cart), image */
const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionItemFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionItemFooterContainer>
            <AddToCartButton onClick={() => addItem(item)} inverted>Add to cart</AddToCartButton>
        </CollectionItemContainer>
    );
};

// Redux Functions
const mapDispatchToProps = dispatch => ({
     addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);