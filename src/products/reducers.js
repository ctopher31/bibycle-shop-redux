import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './actionTypes';

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, items: action.payload, loaded: true, error: false, message: '' };

    case GET_PRODUCTS_FAILURE:
      return { ...state, loaded: false, error: true, message: action.payload };

    default:
      return state;
  }
};

export default productsReducer;
