import { TOGGLE_MENU } from '../actions/types';

const INITIAL_STATE = {
  title: 'Menu',
  content: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
