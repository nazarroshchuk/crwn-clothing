import React from "react";
import './custom-button.styles.scss'

export const Button = ({ children, isGoogleSignIn, inverted, ...props }) => (
    <button
        type='button'
        className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...props}
    >
        {children}
    </button>
)