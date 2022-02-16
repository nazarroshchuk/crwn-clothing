import React from "react";
import './header.styles.scss'
import {Link, NavLink} from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart/cart-dropdown/cart-dropdown";

const Header = (props) => {
  return (
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
              {
                  props.currentUser
                      ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                      : <NavLink className='option' to='sign-in'>
                          SING IN
                      </NavLink>
              }
              <CartIcon />
          </div>
          <CartDropdown />
      </div>
  )
}

const mapStateToProps = state => {
    return {
       currentUser:  state.user.currentUser,
    }
}

export default connect(mapStateToProps)(Header)
