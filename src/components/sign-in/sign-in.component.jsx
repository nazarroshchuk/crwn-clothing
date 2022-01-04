import React, {Component} from "react";
import './sign-in.styles.scss'
import {FormInput} from "../form-input/form-input.component";
import {Button} from "../button/button.component";

export class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        onChange={this.handleChange}
                        label='Pasword'
                    />

                    <Button type='submit'>
                        SIGN IN
                    </Button>
                </form>

            </div>
        )
    }
}