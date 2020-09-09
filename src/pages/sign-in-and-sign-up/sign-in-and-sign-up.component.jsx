import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

/* This is component that includes sign in and sign up from this the page itself that contains the two components */
const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;