// General
import React from 'react';

// Router
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Reselect
import { createStructuredSelector } from 'reselect';

// Our Components
import CartItem from '../cart-item/cart-item.component';

// Styles
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';

/* This is component for the dropdown in the cart icon */
const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ?
				cartItems.map(cartItem => (<CartItem key={CartItem.id} item={cartItem}/>)): 
				<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>}
		</CartItemsContainer>
		<CartDropdownButton onClick={() => 
		{
			dispatch(toggleCartHidden());
			history.push('/checkout')
		}}>GO TO CHECKOUT</CartDropdownButton>
	</CartDropdownContainer>
);

// Redux Functions
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));