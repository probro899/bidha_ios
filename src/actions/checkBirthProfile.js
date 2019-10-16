import { Alert } from 'react-native';
import { updateModalValue } from './index';

const timeFormatChecker = (time) => {
  const reg = new RegExp(/^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/);
  return reg.test(`${time}`);
};

export const checkBirthProfile = () => (dispatch, getState) => {
  const {
    firstName, gender, dob, country, city, state, time,
  } = getState().registerForm.userProfile;
  if (firstName && dob && country && city && state && time && gender) {
    if (timeFormatChecker(time)) {
      return true;
    }
    Alert.alert('Time format Error', 'Time format mismatch please enter given format (23:09)');
    return false;
  }

  const StringToShow = () => {
    const Obj = { firstName, gender, dob, country, city, state, time };
    const keysArray = Object.keys(Obj);
    const finalData = keysArray.filter(data => Obj[data] === null || Obj[data] === '');
    const str = finalData.reduce((string, next) => `${string} \n ${next} :`, '');
    return str;
  };
  Alert.alert(
    'Birth Details Missing',
    StringToShow(),
    [
      { text: 'Ask me later', onPress: () => {} },
      { text: 'Add Now', onPress: () => dispatch(updateModalValue('showProfileModal', true)) },
    ],
    { cancelable: false },
  );
};

export const t = {};
