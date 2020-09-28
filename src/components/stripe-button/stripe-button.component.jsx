// General
import React from 'react';

// Stripe
import StripeCheckout from 'react-stripe-checkout';

/* This component for the stripe button */
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;//Stripe wants the price in cent
    const publishableKey = 'pk_test_JfbboXFdaunW2bLCaEUJassE00TkW5CkAU';

    const onToken = token => {
        console.log(token);
        alert("Payment Sucessful")
    };

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton