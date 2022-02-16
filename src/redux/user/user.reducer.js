import {userActionsType} from "./user.actions-type";

const INITIAL_STATE = {
    currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionsType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.user,
            }
        default:
            return state;
    }
}