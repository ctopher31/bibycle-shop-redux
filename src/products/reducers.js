import { LOAD_PRODUCTS } from './actionTypes';

const products = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, ...action.payload };

    default:
      return { ...state };
  }
};

export default products;
