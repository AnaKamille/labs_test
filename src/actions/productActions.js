
import { Actions } from 'react-native-router-flux';

import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    EDIT_PRODUCT
} from './types';

export const addProduct = (product) => {
    return dispatch => {
        console.log('Add product -> ' , product)
        dispatch({
            type: ADD_PRODUCT,
            payload: product
        })
    }
}
export const editProduct = (index) => {
//debugger
        return dispatch => {
        dispatch({
            type: EDIT_PRODUCT,
            payload: index
        })
    }
}

export const removeProduct = (index) => {
    //debugger
            return dispatch => {
            dispatch({
                type: REMOVE_PRODUCT,
                payload: index
            })
        }
    }