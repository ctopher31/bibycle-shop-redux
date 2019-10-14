import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './actionTypes';

const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
    case REMOVE_ITEM:
    case CLEAR_CART:
      return { ...state, ...action.payload };

    default:
      return { ...state };
  }
};

export default cart;
