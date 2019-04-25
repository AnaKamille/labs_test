import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    EDIT_PRODUCT
    
} from '../actions/types'


// Start the sequence of item ID's at 0
let nextItemId = 0;

const INITIAL_STATE = [{id:0 , name:"teste" , image:"", size: "GG", color: "balck" , price : "89.9"}];

export default (state = INITIAL_STATE, action) => {
    console.log('PRODUCT - REDUCER -- looking action through reducer...', action)
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
                id: nextItemId++,
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