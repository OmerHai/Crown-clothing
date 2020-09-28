// General
import React from 'react';

// Styles
import { CustomButtonContainer } from './custom-button.styles';

/* This is component for all the buttons in the site */
const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;