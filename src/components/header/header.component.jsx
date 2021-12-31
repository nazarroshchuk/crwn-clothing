import React from "react";
import './header.styles.scss'
import {Link, NavLink} from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const Header = () => (
    <div className='header'>
        <Link to={'/'}>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <NavLink className='option' to='shop'>
                SHOP
            </NavLink>
            <NavLink className='option' to='contact'>
                CONTACT
            </NavLink>
        </div>
    </div>
)