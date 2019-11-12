import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { UPDATE_FORM_VALUE } from './types';
import { setAsyncData } from '../common/AsycstrorageHandler';
import { BASE_URL } from '../config';

export const updateFormValue = (schema, data) => {
  return {
    type: UPDATE_FORM_VALUE,
    payload: { schema, data },
  };
};

export const saveBirthdayProfile = () => {
  return async (dispatch, getState) => {
    const fbToken = await AsyncStorage.getItem('fcmToken');
    dispatch(updateFormValue('userProfile', { loading: true, error: null, success: null }));
    const {
      image, firstName, gender, dob, country, city, state, time, accurateTime, uid, registrationToken,
    } = getState().registerForm.userProfile;
    try {
      const formData = new FormData();
      formData.append('image', image ? { uri: image.uri, type: image.type, name: image.fileName } : null);
      formData.append('firstName', firstName);
      formData.append('gender', gender);
      formData.append('dob', dob);
      formData.append('country', country);
      formData.append('state', state);
      formData.append('city', city);
      formData.append('time', time);
      formData.append('accurateTime', accurateTime);
      formData.append('uid', uid);
      formData.append('registrationToken', registrationToken);
      formData.append('fbToken', fbToken);

      const profile = await axios({
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
        method: 'post',
        url: `${BASE_URL}/auth/userRegistration`,
        data: formData,
      });
      if (profile.data.uid && profile.data.token && profile.status === 200) {
        dispatch(updateFormValue('userProfile', { uid: profile.data.uid }));
        dispatch(updateFormValue('userProfile', { registrationToken: profile.data.token }));
        await setAsyncData('USER_ID', `${profile.data.uid}`);
        await setAsyncData('USER_REG_TOKEN', `${profile.data.token}`);
        await setAsyncData('USER_IMAGE', `${JSON.stringify(image)}`);
        await setAsyncData('USER_FIRST_NAME', `${firstName}`);
        await setAsyncData('USER_GENDER', `${gender}`);
        await setAsyncData('USER_DOB_DATE', `${dob}`);
        await setAsyncData('USER_DOB_TIME', `${time}`);
        await setAsyncData('USER_COUNTRY', `${country}`);
        await setAsyncData('USER_STATE', `${state}`);
        await setAsyncData('USER_CITY', `${city}`);
        await setAsyncData('USER_DOB_ACCURATE_TIME', `${accurateTime}`);
      } else if (profile.data.updateId) {
        dispatch(updateFormValue('userProfile', { uid: profile.data.updateId }));
        dispatch(updateFormValue('userProfile', { image }));
        await setAsyncData('USER_ID', `${profile.data.updateId}`);
        await setAsyncData('USER_IMAGE', `${JSON.stringify(image)}`);
        await setAsyncData('USER_FIRST_NAME', `${firstName}`);
        await setAsyncData('USER_GENDER', `${gender}`);
        await setAsyncData('USER_DOB_DATE', `${dob}`);
        await setAsyncData('USER_DOB_TIME', `${time}`);
        await setAsyncData('USER_COUNTRY', `${country}`);
        await setAsyncData('USER_STATE', `${state}`);
        await setAsyncData('USER_CITY', `${city}`);
        await setAsyncData('USER_DOB_ACCURATE_TIME', `${accurateTime}`);
      } else {
        await setAsyncData('USER_IMAGE', `${JSON.stringify(image)}`);
      }
      dispatch(updateFormValue('userProfile', { loading: false, success: 'Profile Successfully submited' }));
    } catch (e) {
      dispatch(updateFormValue('userProfile', { loading: false, error: 'Faild to update profile' }));
      throw e;
    }
  };
};
