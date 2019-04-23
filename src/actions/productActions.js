
import { Actions } from 'react-native-router-flux';

import {
    CHANGE_COLOR,
    CHANGE_PRICE,
    CHANGE_NAME,
    CHANGE_SIZE , 
    CHANGE_IMAGE , 
    CHANGE_PRODUCT,
    CHANGE_PRODUCT_SUCCESS,
    CHANGE_PRODUCT_ERROR,
    ACTIVITY_PRODUCT,
    INSERT_PRODUCT,
    DELETE_PRODUCT,
    RENDER_PRODUCT
} from './types';

export const changeColor = (data) => {
    return {
        type: CHANGE_COLOR,
        payload: data
    }
}
export const changeImage = (data) => {
    return {
        type: CHANGE_IMAGE,
        payload: data
    }
}
export const changePrice = (data) => {
    return {
        type: CHANGE_PRICE,
        payload: data
    }
}

export const changeName = (data) => {
    return {
        type: CHANGE_NAME,
        payload: data
    }
}
export const changeSize = (data) => {
    return {
        type: CHANGE_SIZE,
        payload: data
    }
}

export const changeProduct = (product) => {
    return dispatch => {
        dispatch({type: ACTIVITY_PRODUCT})
        console.log('Change product', product)
        insertProduct(dispatch,product)

        // firebase.auth().createUserWithEmailAndPassword(cadastro.email, cadastro.senha)
        //     .then(user => {
        //         let emailBase64 = b64.encode(cadastro.email)

        //         firebase.database().ref(`/contatos/${emailBase64}`)
        //             .push({
        //                 nome: cadastro.nome
        //             })
        //             .then(value => {
        //                 changeProdutcSuccess(dispatch)
        //             })
        //     })
        //     .catch(error => changeProdutcError(error, dispatch));
    }
}

const changeProductSucess = (dispatch,product) => {
    //  dispatch ({type: 'cadastra_usuario',payload: {...cadastro}})
    dispatch({
        type: CHANGE_PRODUCT_SUCCESS,
        payload: product
    })
    Actions.listProduct();
}

const changeProdutcError = (erro, dispatch) => {
    dispatch({
        type: CHANGE_PRODUCT_ERROR,
        payload: erro.message
    })
}

const insertProduct = (dispatch,product) => {
    console.log('INSERT_PRODUCT -> ',product)
    dispatch({
        type: INSERT_PRODUCT,
        payload: product
    })
}

export const deleteProduct = (index) => {
        return dispatch => {
        dispatch({
            type: DELETE_PRODUCT,
            payload: index
        })
    }
}

export const renderProduct = (index) => {
    return dispatch => {
        dispatch({
            type: RENDER_PRODUCT,
            payload: index
        })
    }   
}