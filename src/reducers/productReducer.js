import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    
} from '../actions/types'


// Start the sequence of item ID's at 0
let nextItemId = 0;

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    console.log('PRODUCT - REDUCER -- looking action through reducer...', action)
    switch (action.type) {
      
        case ADD_PRODUCT: {
            return [
              ...state,
              {
                id: nextItemId++,
                name: action.name,
                bgColor: action.bgColor
              }
            ];
          }
        case REMOVE_PRODUCT: {
            // Find index of item with matching ID and then
            // remove it from the array by its' index
            const index = state.findIndex(x => x.id === action.id);
            return [...state.slice(0, index), ...state.slice(index + 1)];
          }
          default:
            return state;
        }
    }