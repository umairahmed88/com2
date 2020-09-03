import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    SignInSubtitle,
    ButtonsContainer
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    hnadleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password:''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I am a member of Commerce Group Family</SignInTitle>
                <SignInSubtitle>Sign in with Email and Password</SignInSubtitle>
                <form onSubmit={this.hnadleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label='Email'
                        required />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required />
                    <ButtonsContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;