import firebase from 'firebase'
import {
    Actions
} from 'react-native-router-flux';
import b64 from 'base-64'

import {
    CHANGE_COLOR,
    CHANGE_PRICE,
    CHANGE_NAME,
    CHANGE_SIZE , 
    CHANGE_IMAGE , 
    CHANGE_PRODUCT_SUCESS,
    CHANGE_PRODUCT_ERROR,
    CHANGE_PRODUCT,
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

export const changeProdutc = (cadastro) => {
    return dispatch => {
        dispatch({type: ACTIVITY})

        firebase.auth().createUserWithEmailAndPassword(cadastro.email, cadastro.senha)
            .then(user => {
                let emailBase64 = b64.encode(cadastro.email)

                firebase.database().ref(`/contatos/${emailBase64}`)
                    .push({
                        nome: cadastro.nome
                    })
                    .then(value => {
                        changeProdutcSuccess(dispatch)
                    })
            })
            .catch(error => changeProdutcError(error, dispatch));
    }
}

const changeProdutcSuccess = (dispatch) => {
    //  dispatch ({type: 'cadastra_usuario',payload: {...cadastro}})
    dispatch({
        type: CHANGE_PRODUCT_SUCESS
    })
    Actions.boasVindas();
}

const changeProdutcError = (erro, dispatch) => {
    dispatch({
        type: CHANGE_PRODUCT_ERROR,
        payload: erro.message
    })
}


export const autenticaUsuario = (usuario) => {
    return dispatch => {
        
        dispatch({type: ACTIVITY})

        firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.senha)
            .then(user => {
                autenticaUsuarioSucesso(dispatch, user)
            })
            .catch(error => {
                autenticaUsuarioErro(dispatch, error)
            });
    }
}

const autenticaUsuarioSucesso = (dispatch, user) => {
    dispatch({
        type: AUTENTICA_USUARIO_SUCESSO
    })
    Actions.principal();
}
const autenticaUsuarioErro = (dispatch, error) => {
    dispatch({
        type: AUTENTICA_USUARIO_ERRO,
        payload: error.message
    })
}