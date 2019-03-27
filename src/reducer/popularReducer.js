import { SELECT_LANGUAGE } from '../constanst/actionTypes';

const initialState = {
    language_select: "All"
}

export default function popularReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_LANGUAGE:
            return {
                ...state,
                language_select: action.payload
            }
        default:
            return state;
    }
}