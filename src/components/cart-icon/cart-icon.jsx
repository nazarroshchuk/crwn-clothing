import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cart/cart.actions";

const CartIcon = () => {
    const dispatch = useDispatch();

    return (
        <div
            className='cart-icon'
            onClick={() => dispatch(cartActions.toggleCartDropdown())}
        >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;