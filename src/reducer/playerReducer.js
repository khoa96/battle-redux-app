import { USERNAME_SUBMIT } from '../constanst/actionTypes';

const initialState = {
    isUser1Readly: false,
    isUser2Readly: false,
    username1: "",
    username2: ""
}
export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case USERNAME_SUBMIT:
            const { id, username } = action.payload;
            if (id === 1) {
                return {
                    ...state,
                    isUser1Readly: true,
                    username1: username
                }
            } else if (id === 2) {
                return {
                    ...state,
                    isUser2Readly: true,
                    username2: username
                }
            } else {
                return state;
            }
        default:
            return state
    }
}