import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const setAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    return e;
  }
};

export const multiSetAsync = async (keysValues) => {
  try {
    await AsyncStorage.multiSet(keysValues);
  } catch (e) {
    ToastAndroid.show(JSON.stringify(e), ToastAndroid.LONG);
  }
};

export const getAsyncData = async (key) => {
  try {
    const asyncValue = await AsyncStorage.getItem(key);
    return asyncValue;
  } catch (e) {
    ToastAndroid.show(JSON.stringify(e), ToastAndroid.LONG);
    return e;
  }
};

export const multiGetAsync = async (keys) => {
  try {
    const res = AsyncStorage.multiGet(keys);
    return res;
  } catch (e) {
    ToastAndroid.show(JSON.stringify(e), ToastAndroid.LONG);
  }
};
