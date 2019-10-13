import { REMOVE_ITEM } from './actionTypes';

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default cartReducer;
