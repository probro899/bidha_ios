import { UPDATE_PROFILE } from '../actions/types';

const initialModalData = {
  showProfileModal: false,
  showImagePickerModal: false,
  showMessageMenuModal: false,
  showMessageMenuLoading: null,
  showMessageMenuError: null,
  showMessageMenuSuccess: null,
  showIdeaToAsk: false,
  'Terms&Privacy': false,
};

export default (state = initialModalData, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
