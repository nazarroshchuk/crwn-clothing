import { createSelector } from "reselect";

const selectCart = state => state.cart;
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsAmount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc,obj) => acc + obj.amount, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)