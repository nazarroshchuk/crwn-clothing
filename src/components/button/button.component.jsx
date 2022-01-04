import React from "react";
import './custom-button.styles.scss'

export const Button = ({ children, onClick, props }) => (
    <button className='custom-button' onClick={onClick} {...props}>
        {children}
    </button>
)