import { REGISTER_USER,
         USER_REGISTERED,
         LOGIN_USER,
         USER_LOGIN,
         GET_JOKES,
         JOKE_PULL,
         LOG_OUT
         } from '../actions';


const initialState = {
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                error: ''
            };
        case USER_REGISTERED:
            return {
                ...state,
                error: ''
            };
        case LOGIN_USER:
            return {
                ...state,
                error: ''
            };
        case USER_LOGIN:
            return {
                ...state,
                loggedin: true,
                error: ''
            };
        case GET_JOKES:
            return {
                ...state,
                error: ''
            }
        case JOKE_PULL:
            return {
                ...state,
                jokes: action.payload,
                error: ''
            }
        case LOG_OUT:
            return {
                ...state,
                loggedin: false,
                error: ''
            }
        default:
            return state;
        }
}
