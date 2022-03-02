import { cartActionTypes } from "./cart.action-types";

export const cartActions = {
    toggleCartDropdown,
    addCartItem,
    removeCartItem,
    deleteCartItem,
}

function toggleCartDropdown() {
    return {
        type: cartActionTypes.TOGGLE_CARD_HIDDEN,
    }
}

function addCartItem(item) {
    return {
        type: cartActionTypes.ADD_CART_ITEM,
        payload: { item },
    }
}

function removeCartItem(item) {
    return {
        type: cartActionTypes.REMOVE_CART_ITEM,
        payload: { item },
    }
}

function deleteCartItem(id) {
    return {
        type: cartActionTypes.DELETE_CART_ITEM,
        payload: {id}
    }
}