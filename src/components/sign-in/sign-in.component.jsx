// General
import React from 'react';

//Firebase
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

// Our Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Styles
import { SignInContainer, ButtonsContainer } from './sign-in.styles';


/* This is component for the sign in form that allows people to sign to our app */
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    };

    /* Method for submit of the sign in from */
    handleSubmit = async event => {
        const { email, password } = this.state;
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='email' />
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='password' />
                    <ButtonsContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>    
                    </ButtonsContainer>     
                </form>
            </SignInContainer>
        )
    }
};

export default SignIn;