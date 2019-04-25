
import { Actions } from 'react-native-router-flux';

import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
} from './types';

export const addProduct = (product) => {
    return dispatch => {
        console.log('Adding product', product)
        insertProduct(dispatch,product)
    }
}


const insertProduct = (dispatch,product) => {
    console.log('INSERT_PRODUCT -> ',product)
    dispatch({
        type: ADD_PRODUCT,
        payload: product
    })
}

export const deleteProduct = (index) => {
    debugger
        return dispatch => {
        dispatch({
            type: REMOVE_PRODUCT,
            payload: index
        })
    }
}
