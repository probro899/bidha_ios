import { MESSAGE_CHANGE } from '../actions/types';

const MESSAGE_INITIAL_STATE = {
  message: '',
  messageList: [],
  messageStatus: null,
  starRatingStatus: null,
};

export default (state = MESSAGE_INITIAL_STATE, actions) => {
  switch (actions.type) {
    case MESSAGE_CHANGE:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};
