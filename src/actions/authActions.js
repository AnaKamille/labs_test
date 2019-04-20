
import { Actions } from 'react-native-router-flux';

import { AUTH_USER, AUTH_USER_SUCCESS,
         AUTH_USER_ERROR, ACTIVITY } from './types';

import { GoogleSignin, statusCodes } from 'react-native-google-signin';


export const authUser = () => {
    return dispatch => {
        
        dispatch({type: ACTIVITY})

        
        GoogleSignin.signIn().then(user => {
            console.log(user , 'user ----')
                authUserSuccess(dispatch, user)
            })
            .catch(error => {
                console.log(error , 'error ----')
                authUserError(dispatch, error)
            });
    }
}

const authUserSuccess = (dispatch, user) => {
    dispatch({
        type: AUTH_USER_SUCCESS
    })
    Actions.listProducts();
}
const authUserError = (dispatch, error) => {
    dispatch({
        type: AUTH_USER_ERROR,
        payload: error.message
    })
}