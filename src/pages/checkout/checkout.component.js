import React from "react";
import './checkout.styles.scss';
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import {CheckoutItem} from "./checkout-item/checkout-item.component";
import {StripeCheckoutButton} from "../../components/stripe-button/stripe.button.component";

export const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem item={cartItem}/>)}
            <div className='total'>TOTAL: ${total}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}