
import { Actions } from 'react-native-router-flux';

import { AUTH_USER, AUTH_USER_SUCCESS,
         AUTH_USER_ERROR, ACTIVITY_AUTH , AUTH_USER_SIGNOUT_SUCCESS } from './types';

import { GoogleSignin, statusCodes } from 'react-native-google-signin';


export const authUser = () => {
    return dispatch => {
        dispatch({type: ACTIVITY_AUTH})

        signIn = async () => {
            try {
                await GoogleSignin.configure();
                user  = await GoogleSignin.signIn()
                console.log(user , 'user ----')
                authUserSuccess(dispatch, user)
            } catch(error){
                    console.log(error , 'error ----')
                    authUserError(dispatch, error)
            };
        }
        signIn()
    }
    
}

const authUserSuccess = (dispatch, user) => {
    dispatch({
        type: AUTH_USER_SUCCESS
    })
    Actions.listProduct();
}
const authUserError = (dispatch, error) => {
    dispatch({
        type: AUTH_USER_ERROR,
        payload: error.message
    })
}

export const authUserSignout = () => {
    return dispatch => {
        console.log('Action - google signout')
        dispatch({type: ACTIVITY_AUTH})
        signOut = async () => {
            try {
              await GoogleSignin.revokeAccess();
              await GoogleSignin.signOut();
              console.log('USER - SIGNED OUT')
              authUserSignoutSucess(dispatch);
            } catch (error) {
                authUserSignoutError(dispatch, error)
              console.error(error);
            }
          };

          signOut();
    }
}

const authUserSignoutSucess = (dispatch) => {
    dispatch({
        type: AUTH_USER_SIGNOUT_SUCCESS
    })
    console.log('GO TO LOGIN');
    Actions.login();
}
const authUserSignoutError = (dispatch, error) => {
    dispatch({
        type: AUTH_USER_SIGNOUT_ERROR,
        payload: error.message
    })
}