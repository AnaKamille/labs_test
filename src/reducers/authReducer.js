import {
    AUTH_USER, AUTH_USER_SUCCESS,
    AUTH_USER_ERROR, ACTIVITY_AUTH , 
    AUTH_USER_SIGNOUT_SUCCESS , AUTH_USER_SIGNOUT_ERROR 
} from '../actions/types'
import { Actions } from 'react-native-router-flux';


const INITIAL_STATE = {
    user : {} , 
    authLoader: false,
    authError : ""
}

export default (state = INITIAL_STATE, action) => {
    console.log('AUTH - REDUCER -- looking action through reducer...', action)
    switch (action.type) {
        case AUTH_USER_ERROR:
            return {
                ...state,
                user : {} , 
                authError: action.payload,
                authLoader: false,
            }
            break;
        case AUTH_USER_SUCCESS:
            return {
                ...state,
                user : Actions.payload, 
                authLoader: false,
                authError : ""
            }
            break;

        case AUTH_USER_SIGNOUT_SUCCESS:
            return {
                ...state,
                user : {} , 
                authLoader: false,
                authError : ""
            }
            break;
        case AUTH_USER_SIGNOUT_ERROR:
            return {
                ...state,
                authError : Actions.payload, 
                authLoader: false,
            }
            break;
        case ACTIVITY_AUTH:
            return {
                ...state,
                authLoader: true,
            }
            break;

        default:
            return state
            break;
    }
}