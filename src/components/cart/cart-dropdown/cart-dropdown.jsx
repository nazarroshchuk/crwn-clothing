import React from "react";

import './cart-dropdown.styles.scss';
import {Button} from "../../button/button.component";
import {useSelector} from "react-redux";

const CartDropdown = () => {
    const hidden = useSelector(state => state.cart.hidden);

    if (hidden) {
        return null;
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;