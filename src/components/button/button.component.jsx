import React from "react";
import './custom-button.styles.scss'

export const Button = ({ children, props }) => (
    <button className='custom-button' {...props}>
        {children}
    </button>
)