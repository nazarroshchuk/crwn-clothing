import React from "react";

import './cart-dropdown.styles.scss';
import { Button } from "../../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../redux/cart/cart.actions";
import {CartItem} from "../../cart-item/cart-item.component";

const CartDropdown = () => {
    const hidden = useSelector(state => state.cart.hidden);
    const cartItemsList = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    if (hidden) {
        return null;
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {cartItemsList.map(el => (
                <CartItem
                    item={el}
                    key={el.id}
                    addItem={() => dispatch(cartActions.addCartItem(el))}
                    removeItem={() => dispatch(cartActions.removeCartItem(el))}
                />
            ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;