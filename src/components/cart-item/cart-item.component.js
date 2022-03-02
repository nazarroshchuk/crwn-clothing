import React from "react";
import './cart-item.styles.scss'
import { IoAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/all";
export const CartItem = ({ addItem, removeItem, item: { imageUrl, name, price, amount } }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />
            <div
                className='remove'
                onClick={removeItem}
            >
                <IoIosRemoveCircleOutline size={32}/>
            </div>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{amount} X ${price}</span>
            </div>
            <div
                className='add'
                onClick={addItem}
            >
                <IoAddCircleOutline size={32}/>
            </div>
        </div>
    )
}