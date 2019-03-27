import { SELECT_LANGUAGE } from '../constanst/actionTypes';

export const selectLanguage = (payload) => {
    return {
        type: SELECT_LANGUAGE,
        payload
    }
}