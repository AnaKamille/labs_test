import {
    CHANGE_COLOR,
    CHANGE_PRICE,
    CHANGE_NAME,
    CHANGE_SIZE , 
    CHANGE_IMAGE , 
    CHANGE_PRODUCT_SUCCESS,
    CHANGE_PRODUCT_ERROR,
    CHANGE_PRODUCT,
    ACTIVITY
    
} from '../actions/types'


const INITIAL_STATE = {
    color: "",
    price: "",
    name: "",
    image: "",
    size:"",
    productError: "",
    productLoader: false

}

export default (state = INITIAL_STATE, action) => {
    console.log('Olooking action through reducer...', action)
    switch (action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            }
            break;
        case CHANGE_PRICE:
            return {
                ...state,
                price: action.payload
            }
            break;
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
            break;
        case CHANGE_SIZE:
            return {
                ...state,
                size: action.payload
            }
            break;
        case CHANGE_IMAGE:
            return {
                ...state,
                image: action.payload
            }
            break;
       
        case CHANGE_PRODUCT_ERROR:
            return {
                ...state,
                color: "",
                price: "",
                image: "",
                name: "",
                size: "",
                productError: action.payload,
                productLoader: false
            }
            break;
        case CHANGE_PRODUCT_SUCCESS:
            return {
                ...state,
                color: "",
                price: "",
                image: "",
                name: "",
                size: "",
                productError: "",
                productLoader: false
            }
            break;
        case ACTIVITY:
            return {
                ...state,
                productLoader: true
            }
            break;

        default:
            return state
            break;
    }
}