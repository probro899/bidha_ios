import { UPDATE_FORM_VALUE } from '../actions/types';

const initialFormState = {
  userProfile: {
    image: null,
    firstName: null,
    gender: null,
    dob: null,
    country: null,
    city: null,
    state: null,
    time: null,
    registrationToken: null,
    uid: null,
    internetStatus: true,
    accurateTime: false,
    loading: false,
    success: false,
    error: null,
  },
  contactUsMessage: {
    userName: null,
    userEmail: null,
    userMessage: null,
    error: null,
    loading: null,
    success: null,
  },
};

export default (state = initialFormState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      return {
        ...state,
        [action.payload.schema]: {
          ...state[action.payload.schema], ...action.payload.data,
        },
      };
    default:
      return state;
  }
};
