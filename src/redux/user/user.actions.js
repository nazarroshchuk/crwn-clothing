import { userActionsType } from "./user.actions-type";

export const userActions = {
    setCurrentUser,
}

function setCurrentUser(user) {
    return {
        type: userActionsType.SET_CURRENT_USER,
        payload: { user },
    }
}