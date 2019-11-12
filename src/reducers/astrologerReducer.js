import { ASTROLOGER_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ASTROLOGER_UPDATE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
