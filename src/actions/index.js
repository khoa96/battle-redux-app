import { SELECT_LANGUAGE, USERNAME_SUBMIT } from '../constanst/actionTypes';

export const selectLanguage = (payload) => {
    return {
        type: SELECT_LANGUAGE,
        payload
    }
}

export const usernameSubmit  = (payload) => {
    console.log(payload)
    return {
        type: USERNAME_SUBMIT,
        payload
    }
}