import React from "react";

import './cart-dropdown.styles.scss';
import { Button } from "../../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../redux/cart/cart.actions";
import { CartItem } from "../../cart-item/cart-item.component";
import {selectCartHidden, selectCartItems} from "../../../redux/cart/cart.selectors";

const CartDropdown = () => {
    const hidden = useSelector(selectCartHidden);
    const cartItemsList = useSelector(selectCartItems);
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