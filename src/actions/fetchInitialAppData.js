import axios from 'axios';
import { BASE_URL } from '../config';
import { updateMessage, updateMainValue } from './index';

export const fetchInitialAppData = () => {
  return async (dispatch, getState) => {
    try {
      const resToken = getState().registerForm.userProfile.registrationToken;
      // const fcmToken = await AsyncStorage.getItem('fcmToken');
      const responseFetch = await axios.get(`${BASE_URL}/app/fetch-initial-data?reg_token=${resToken}`);
      console.log('fetch initial data', responseFetch.data);
      if (responseFetch.status === 200) {
        dispatch(updateMessage('messageList', responseFetch.data.ansQuestionDetails));
        dispatch(updateMainValue('configuration', responseFetch.data.appConfigurationDetails));
        dispatch(updateMainValue('drawer', true));
        dispatch(updateMainValue('freeQuestion', responseFetch.data.freeQuestion));
        dispatch(updateMainValue('systemMessage', responseFetch.data.systemMessage || []));
        dispatch(updateMainValue('astrologerList', responseFetch.data.astroDetails));
      }
    } catch (err) {
      // console.log('fetch initial data error', err);
      throw err;
    }
  };
};
export const test = {};
