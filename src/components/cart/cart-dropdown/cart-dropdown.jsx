import React from "react";

import './cart-dropdown.styles.scss';
import { Button } from "../../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../redux/cart/cart.actions";

const CartDropdown = () => {
    const hidden = useSelector(state => state.cart.hidden);
    const cartItemsList = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    if (hidden) {
        return null;
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            {cartItemsList.map(el => (
                <div key={el.name}>
                    <span onClick={() => dispatch(cartActions.removeCartItem(el))}>-</span>
                    <p >{el.price}</p>
                    <span onClick={() => dispatch(cartActions.addCartItem(el))}>+</span>
                </div>
            ))}
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;