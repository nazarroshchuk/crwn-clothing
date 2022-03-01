import React from "react";

import './cart-dropdown.styles.scss';
import { Button } from "../../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../redux/cart/cart.actions";
import { CartItem } from "../../cart-item/cart-item.component";
import { selectCartHidden, selectCartItems } from "../../../redux/cart/cart.selectors";
import {useHistory} from "react-router-dom";

const CartDropdown = () => {
    const hidden = useSelector(selectCartHidden);
    const cartItemsList = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();

    if (hidden) {
        return null;
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {cartItemsList.length
                ? (cartItemsList.map(el => (
                    <CartItem
                        item={el}
                        key={el.id}
                        addItem={() => dispatch(cartActions.addCartItem(el))}
                        removeItem={() => dispatch(cartActions.removeCartItem(el))}
                    />
                )))
                : <span className='empty-message'>Your cart is empty</span>
            }
            </div>
            <Button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;