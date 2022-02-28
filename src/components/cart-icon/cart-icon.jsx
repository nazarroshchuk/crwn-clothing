import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import {useDispatch, useSelector} from "react-redux";
import { cartActions } from "../../redux/cart/cart.actions";

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <div
            className='cart-icon'
            onClick={() => dispatch(cartActions.toggleCartDropdown())}
        >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>
                {cartItems.length ? cartItems.reduce((acc,obj) => acc + obj.amount, 0) : 0}
            </span>
        </div>
    )
}

export default CartIcon;