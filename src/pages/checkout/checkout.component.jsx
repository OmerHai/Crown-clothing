// General
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

// Reselect
import { createStructuredSelector } from 'reselect';

// Our Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

// Styles
import { CheckoutContainer, CheckoutHeaderContainer, CheckoutBlockContainer, TotalContainer, TextWarning } from './checkout.styles';


/* This is the checkout page in our app */
const CheckoutPage = ({cartItems, total}) => (
    <CheckoutContainer>
        <CheckoutHeaderContainer>
            <CheckoutBlockContainer><span>Product</span></CheckoutBlockContainer>
            <CheckoutBlockContainer><span>Description</span></CheckoutBlockContainer>
            <CheckoutBlockContainer><span>Quantity</span></CheckoutBlockContainer>
            <CheckoutBlockContainer><span>Price</span></CheckoutBlockContainer><CheckoutBlockContainer><span>Remove</span></CheckoutBlockContainer>
        </CheckoutHeaderContainer>
            {cartItems.map(
                cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))}
        <TotalContainer><span>TOTAL: ${total}</span></TotalContainer>
        <TextWarning>
            *Please enter the following details of credit card:
            <br />
            **Number: 4242 4242 4242 4242
            <br />
            **Date: can be any future date
            <br />
            **CVV: can be any 3 digits
        </TextWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutContainer>
);

// Redux Functions
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);