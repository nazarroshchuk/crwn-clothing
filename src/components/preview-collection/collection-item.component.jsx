import React from "react";
import './collection-item.styles.scss'
import {Button} from "../button/button.component";
import {useDispatch} from "react-redux";
import {cartActions} from "../../redux/cart/cart.actions";

export const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
    const dispatch = useDispatch();
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button
                inverted
                onClick={() => dispatch(cartActions.addCartItem(item))}
            >
                ADD TO CART
            </Button>
        </div>
    )
}