import React from 'react';
import './checkout-item.styles.scss';
import {cartActions} from "../../../redux/cart/cart.actions";
import {useDispatch} from "react-redux";

export const CheckoutItem = ({ item: { imageUrl, name, price, amount, id }, item }) => {
    const dispatch = useDispatch();

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => dispatch(cartActions.removeCartItem(item))} className='arrow'>&#10094;</div>
                    <span className='value'>{amount}</span>
                <div onClick={() => dispatch(cartActions.addCartItem(item))} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={() => dispatch(cartActions.deleteCartItem(id))} className='remove-button' >&#10005;</div>
        </div>
    )
}