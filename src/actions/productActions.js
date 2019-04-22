
import { Actions } from 'react-native-router-flux';

import {
    CHANGE_COLOR,
    CHANGE_PRICE,
    CHANGE_NAME,
    CHANGE_SIZE , 
    CHANGE_IMAGE , 
    CHANGE_PRODUCT_SUCESS,
    CHANGE_PRODUCT_ERROR,
    ACTIVITY
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
        dispatch({type: ACTIVITY})

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

const changeProdutcSuccess = (dispatch,product) => {
    //  dispatch ({type: 'cadastra_usuario',payload: {...cadastro}})
    dispatch({
        type: CHANGE_PRODUCT_SUCESS,
        payload: product
    })
    Actions.boasVindas();
}

const changeProdutcError = (erro, dispatch) => {
    dispatch({
        type: CHANGE_PRODUCT_ERROR,
        payload: erro.message
    })
}