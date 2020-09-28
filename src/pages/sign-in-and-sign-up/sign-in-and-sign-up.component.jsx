// General
import React from 'react';

// Our Components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// Styles
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

/* This is component that includes sign in and sign up from this the page itself that contains the two components */
const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUp;