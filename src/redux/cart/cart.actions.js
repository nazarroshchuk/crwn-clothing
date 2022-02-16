import { cartActionTypes } from "./cart.action-types";

export const cartActions = {
    toggleCartDropdown,
}

function toggleCartDropdown() {
    return {
        type: cartActionTypes.TOGGLE_CARD_HIDDEN,
    }
}