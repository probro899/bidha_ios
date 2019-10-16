import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';
// import firebase from 'react-native-firebase';
import { PersistGate } from 'redux-persist/integration/react';
// import PushNotification from 'react-native-push-notification';
import RootRounter from './src/routers';
import persistStorage from './src/redux-persist';
// import store from './src/store';
const { store, persistor } = persistStorage();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.checkPermission();
    // PushNotification.setApplicationIconBadgeNumber(0);
  }

  // checkPermission = async () => {
  //   const enabled = await firebase.messaging().hasPermission();
  //   if (enabled) {
  //     this.getToken();
  //   } else {
  //     this.requestPermission();
  //   }
  // }

  // getToken = async () => {
  //   let fcmToken = await AsyncStorage.getItem('fcmToken');
  //   console.log('fcm token', fcmToken);
  //   if (!fcmToken) {
  //     fcmToken = await firebase.messaging().getToken();
  //     if (fcmToken) {
  //       await AsyncStorage.setItem('fcmToken', fcmToken);
  //     }
  //   }
  // }

  // requestPermission = async () => {
  //   try {
  //     await firebase.messaging().requestPermission();
  //     this.getToken();
  //   } catch (e) {
  //     throw e;
  //   }
  // }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <RootRounter />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
