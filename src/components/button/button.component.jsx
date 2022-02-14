import React from "react";
import './custom-button.styles.scss'

export const Button = ({ children, isGoogleSignIn, ...props }) => (
    <button type='button' className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...props}>
        {children}
    </button>
)