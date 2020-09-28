// General
import React from 'react';

// Styles
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

/* This is a component for the cart item that is represent in the cart(icon) */
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item"/>
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} X ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;