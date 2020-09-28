// General
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// Reselect
import { createStructuredSelector } from 'reselect';

// Styles
import { CartContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

/* This component is for the cart icon in the app */
const CartIcon = ({ toggleCartHidden, itemCount}) => (
	<CartContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartContainer>
);

// Redux Functions
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
