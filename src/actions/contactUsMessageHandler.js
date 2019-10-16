import axios from 'axios';
import { updateFormValue } from './updateFormValue';
import { BASE_URL } from '../config';

export const contactUsMessageHandler = schema => async (dispatch, getState) => {
  try {
    const { userName, userMessage, userEmail, registrationToken } = getState().registerForm[schema];
    dispatch(updateFormValue('contactUsMessage', { loading: true, error: null, success: null }));
    const sendMessageRes = await axios.post(`${BASE_URL}/app/send-contact-us-message`, { userName, userMessage, userEmail, registrationToken });
    if (sendMessageRes.status === 200) {
      dispatch(updateFormValue('contactUsMessage', {
        loading: false, success: 'Your message has been sent. we will contact you soon', error: null, userName: '', userMessage: '', userEmail: '',
      }));
    }
  } catch (e) {
    dispatch(updateFormValue('contactUsMessage', { loading: false, success: null, error: 'Message sending faild' }));
  }
};

export const tes = {};
