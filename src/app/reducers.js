import { PRELOAD_STATE } from './actionTypes';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case PRELOAD_STATE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default appReducer;
