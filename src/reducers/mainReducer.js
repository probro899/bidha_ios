import { UPDATE_MAIN_VALUE } from '../actions/types';

const MAIN_INITIAL_STATE = {
  drawer: true,
  configuration: null,
  astrologerList: null,
  notification: { status: false, data: [] },
  freeQuestion: [],
  systemMessage:[],
};

export default (state = MAIN_INITIAL_STATE, actions) => {
  switch (actions.type) {
    case UPDATE_MAIN_VALUE:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};
