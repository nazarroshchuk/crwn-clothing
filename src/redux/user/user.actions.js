import { userActionTypes } from "./user.action-types";

export const userActions = {
    setCurrentUser,
}

function setCurrentUser(user) {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: { user },
    }
}