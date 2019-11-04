import {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
  CLEAR_CART,
} from './actionTypes';

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_SUCCESS:
    case REMOVE_ITEM_SUCCESS:
      return { ...state, ...action.payload, error: false, message: '' };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
        cartCount: 0,
        shipping: 0,
        subtotal: 0,
        total: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
