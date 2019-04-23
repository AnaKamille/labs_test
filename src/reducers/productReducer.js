import {
    CHANGE_COLOR,
    CHANGE_PRICE,
    CHANGE_NAME,
    CHANGE_SIZE , 
    CHANGE_IMAGE , 
    CHANGE_PRODUCT_SUCCESS,
    CHANGE_PRODUCT_ERROR,
    CHANGE_PRODUCT,
    ACTIVITY_PRODUCT,
    INSERT_PRODUCT,
    DELETE_PRODUCT,
    RENDER_PRODUCT
    
} from '../actions/types'


const INITIAL_STATE = {
    color: "",
    price: "",
    name: "",
    image: "",
    size:"",
    productList : [
                   {size:'M', color:'black', name: 'Product Name', image: 'https://i0.wp.com/descubraoguaruja.com.br/wp-content/uploads/2016/07/default-placeholder.png',price: 25.99 },
                  ],
                
    productError: "",
    productLoader: false

}

export default (state = INITIAL_STATE, action) => {
    console.log('PRODUCT - REDUCER -- looking action through reducer...', action)
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
        case INSERT_PRODUCT:
            return {
                ...state,
                productList: [...state.productList, action.payload],
                productError: "",
                productLoader: false

               
            }
            break;

        case DELETE_PRODUCT:
            return {
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1),
                productError: "",
                productLoader: false

               
            }
            break;
        case ACTIVITY_PRODUCT:
            return {
                ...state,
                productLoader: true
            }
            break;
            case RENDER_PRODUCT:
            return {
                ...state,
                color: action.payload.color,
                price: action.payload.price,
                image: action.payload.image,
                name: action.payload.name,
                size: action.payload.size,
                productError: "",
                productLoader: false
            }
            break;

        default:
            return state
            break;
    }
}