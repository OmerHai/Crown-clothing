// General
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

// Styles
import { CheckoutItemContainer, ImageContainer, CheckoutImage, TextContainer, QunatityContainer, RemoveButtonContainer } from './checkout-item.styles';

/* This is a component for all the items that will display in the checkout page */
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <CheckoutImage src={imageUrl} alt="item"/>
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QunatityContainer>
            <div onClick={()=> removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={()=>addItem(cartItem)}>&#10095;</div>
        </QunatityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
    )
};

// Redux Functions
const mapDispatchToProp = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProp)(CheckoutItem);
