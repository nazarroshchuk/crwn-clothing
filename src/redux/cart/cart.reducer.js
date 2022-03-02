import {cartActionTypes} from "./cart.action-types";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case cartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItem(action.payload.item, state.cartItems)
            }
        case cartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItem(action.payload.item, state.cartItems),
            }
        case cartActionTypes.DELETE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(el => el.id !== action.payload.id)
            }
        default:
            return state;
    }
}

function addItem(item, listItems) {
    const existItem = listItems.find(el => el.id === item.id);
    if (existItem) {
       return listItems.map(cartItem =>
           cartItem.id === item.id
                ? { ...cartItem, amount: cartItem.amount + 1 }
                : cartItem
       )
    }

    return [...listItems, {...item, amount: 1}];
}

function removeItem(item, listItems) {
    return listItems.map(cartItem =>
        cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount - 1 }
            : cartItem
        ).filter(el => el.amount)
    }

