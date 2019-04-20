import {combineReducers} from 'redux'
import ProductReducer from './productReducer'
import AuthReducer from './authReducer'

export default combineReducers({
    AuthReducer: AuthReducer,
    ProductReducer: ProductReducer
})