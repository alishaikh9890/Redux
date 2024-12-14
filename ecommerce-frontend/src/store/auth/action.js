import {LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./actionType"

export const loginLoading = () =>{
    return {
        type : LOGIN_LOADING
    }
}

export const loginSucess = (payload) =>{
    return {
        type : LOGIN_SUCCESS,
        payload
    }
}

export const loginError = () =>{
    return {
        type : LOGIN_ERROR
    }
}

export const logoutSucess = () =>{
    return {
        type : LOGOUT_SUCCESS
    }
}