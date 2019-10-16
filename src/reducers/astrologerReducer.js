import { ASTROLOGER_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  // console.log('astrolger Reducer called', action.type);
  switch (action.type) {
    case ASTROLOGER_UPDATE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
