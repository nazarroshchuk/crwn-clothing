import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import {useDispatch, useSelector} from "react-redux";
import { cartActions } from "../../redux/cart/cart.actions";
import { selectCartItemsAmount } from "../../redux/cart/cart.selectors";

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemsAmount = useSelector(selectCartItemsAmount);

    return (
        <div
            className='cart-icon'
            onClick={() => dispatch(cartActions.toggleCartDropdown())}
        >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>
                {cartItemsAmount}
            </span>
        </div>
    )
}

export default CartIcon;