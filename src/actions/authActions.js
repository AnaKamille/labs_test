
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import { AUTH_USER, AUTH_USER_SUCCESS,
         AUTH_USER_ERROR, ACTIVITY_AUTH , AUTH_USER_SIGNOUT_SUCCESS } from './types';

import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { googleAuthErrorBeautyfy } from '../helpers/errorBeautyfy'

//import AsyncStorage from '@react-native-community/async-storage';


export const authUser = () => {
    return dispatch => {
        dispatch({type: ACTIVITY_AUTH})
        signIn = async () => {
            try {
                await GoogleSignin.configure();
                user  = await GoogleSignin.signIn()
                await this.storeData('@user', JSON.stringify(user))
                authUserSuccess(dispatch, user)
            } catch(error){
                errorHuman = googleAuthErrorBeautyfy(error)
                console.log('Humna-->', errorHuman)
                authUserError(dispatch, errorHuman)
            };
        }
        signIn()
    }
}

const authUserSuccess = (dispatch, user) => {
    dispatch({
        type: AUTH_USER_SUCCESS,
        user:user
    })
    Actions.listProduct();
}
const authUserError = (dispatch, error) => {
    dispatch({
        type: AUTH_USER_ERROR,
        payload: error
    })
}

export const authUserSignout = () => {
    return dispatch => {
        dispatch({type: ACTIVITY_AUTH})
        signOut = async () => {
            try {
              //await GoogleSignin.revokeAccess();
              await GoogleSignin.signOut();
              await this.removeData('@user')
              console.log('USER - SIGNED OUT')
              authUserSignoutSucess(dispatch);
            } catch (error) {
                console.error('authUserSignout',error);
                errorHuman = googleAuthErrorBeautyfy(error)
                authUserSignoutError(dispatch, error)
            }
          };

          signOut();
    }
}

const authUserSignoutSucess = (dispatch) => {
    dispatch({
        type: AUTH_USER_SIGNOUT_SUCCESS
    })
    Actions.login();
}
const authUserSignoutError = (dispatch, error) => {
    dispatch({
        type: AUTH_USER_SIGNOUT_ERROR,
        payload: error
    })
}


storeData = async (key , value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      // saving error
      console.log('Error :: ' , error)
    }
  }

removeData = async (key) => {
      try{
          await AsyncStorage.removeItem(key)
      }catch(error){
        console.log('Error ::' , error)
      }
  }