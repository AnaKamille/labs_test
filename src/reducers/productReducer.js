import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    EDIT_PRODUCT
    
} from '../actions/types'

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      
        case ADD_PRODUCT: {
            return [
              ...state,
              {
                color: action.payload.color,
                price: action.payload.price,
                name:  action.payload.name,
                image: action.payload.image,
                size:  action.payload.size,
                id: state.length+1,
              }
            ];
          }

          case EDIT_PRODUCT: {
            return [
              ...state,
              ...action.payload
            ];
          }
        case REMOVE_PRODUCT: {
            // Find index of item with matching ID and then
            // remove it from the array by its' index
            const index = state.findIndex(x => x.id === action.payload);
            return [...state.slice(0, index), ...state.slice(index + 1)];
          }
          default:
            return state;
        }
    }