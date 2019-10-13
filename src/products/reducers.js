import { ADD_ITEM } from './actionTypes';

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default productsReducer;
