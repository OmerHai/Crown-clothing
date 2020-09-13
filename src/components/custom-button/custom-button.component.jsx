import React from 'react';
import './custom-button.styles.scss';

/* This is component for all the buttons in the site */

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className= {`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button`} 
        {...otherProps}
    >
        {children}
    </button>
)
export default CustomButton;