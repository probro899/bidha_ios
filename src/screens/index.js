import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import firebase from 'react-native-firebase';
// import PushNotification from 'react-native-push-notification';
import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Home from './home';
import WelcomeScreen from './welcome-screen';
import * as actions from '../actions';
import { multiGetAsync, getAsyncData, setAsyncData } from '../common/AsycstrorageHandler';

class index extends React.Component {
  state={ renderMain: true };

  async UNSAFE_componentWillMount() {
    // await this.updateNotification();
    // const { main } = this.props;
    // await setAsyncData('FREE_QUESTION', `${main.freeQuestion}`);
    NetInfo.getConnectionInfo().then(async (connnectionInfo) => {
      if (connnectionInfo.type === 'none') {
        this.setState({ renderMain: false });
        Alert.alert('No internet connection', 'Please check your internet settings');
      } else {
        await this.fetchInitialData();
        this.setState({ renderMain: false });
      }
    });
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  async componentDidMount() {
    // this.checkIncomingMessage();
    // PushNotification.configure({
    //   onRegister: () => {},
    //   onNotification: () => {},
    //   permissions: {
    //     alert: true,
    //     badge: true,
    //     sound: true,
    //   },
    //   popInitialNotification: true,
    //   requestPermissions: true,
    // });
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    // this.checkIncomingMessage();
  }

  // checkIncomingMessage = async () => {
  //   const { updateMainValue, main, fetchFreeQuestion } = this.props;
  //   // firebase.notifications().onNotification(test => console.log(test));
  //   firebase.messaging().onMessage(async (message) => {
  //     console.log('message arrived', message);
  //     if (message.data.notiBody && message.data.notiTitle) {
  //       console.log('message', message);
  //     }
  //     if (message.data.message && parseInt(message.data.freeQuestion, 10) === 0) {
  //       console.log('inside message only', JSON.parse(message.data.message));
  //       updateMainValue('systemMessage', [...main.systemMessage, {...JSON.parse(message.data.message), timeStamp: Date.now()}]);
  //       PushNotification.localNotification({
  //         autoCancel: true,
  //         largeIcon: 'app_logo1',
  //         smallIcon: 'app_logo1',
  //         title: message.data.notiTitle,
  //         color: 'green',
  //         vibrate: true,
  //         vibration: 300,
  //         message: message.data.notiBody,
  //         playSound: true,
  //         soundName: 'default',
  //       });
  //     }
  //     if (parseInt(message.data.freeQuestion, 10) > 0) {
  //       await fetchFreeQuestion();
  //       updateMainValue('systemMessage', [...main.systemMessage, {...JSON.parse(message.data.message), timeStamp: Date.now()} ]);
  //       PushNotification.localNotification({
  //         autoCancel: true,
  //         largeIcon: 'app_logo1',
  //         smallIcon: 'app_logo1',
  //         title: message.data.notiTitle,
  //         color: 'green',
  //         vibrate: true,
  //         vibration: 300,
  //         message: message.data.notiBody,
  //         playSound: true,
  //         soundName: 'default',
  //       });
  //       // const preFreeQuestion = await getAsyncData('FREE_QUESTION');
  //       // console.log('preFreeQuestion', preFreeQuestion);
  //       // console.log('free question mode', parseInt(preFreeQuestion, 10), parseInt(message.data.freeQuestion, 10));
  //       // updateMainValue('freeQuestion', parseInt(message.data.freeQuestion, 10) + main.systemMessage.length);
  //       // await setAsyncData('FREE_QUESTION', `${(parseInt(preFreeQuestion, 10) || 0) + parseInt(message.data.freeQuestion, 10)}`);
  //     }
  //     // console.log('notification in home', message.data);
  //   });
  // }

  // updateNotification = async () => {
  //   const { updateMainValue, main } = this.props;
  //   const notification = await getAsyncData('NOTIFICATION');
  //   if (notification) {
  //     const notiObject = JSON.parse(notification);
  //     if (notiObject) {
  //       if (notiObject.data.message) {
  //         updateMainValue('notification', { status: true, data: [...main.notification.data, { header: notiObject.data.notiTitle, body: notiObject.data.message, timeStamp: notiObject.timeStamp }] });
  //       }
  //       if (parseInt(notiObject.data.freeQuestion, 10) > 0) {
  //         // console.log('inside add free question', notiObject.data.freeQuestion);
  //         updateMainValue('freeQuestion', (parseInt(main.freeQuestion, 10) || 0) + parseInt(notiObject.data.freeQuestion, 10));
  //         await setAsyncData('FREE_QUESTION', `${(parseInt(main.freeQuestion, 10) || 0) + parseInt(notiObject.data.freeQuestion, 10)}`);
  //       }
  //       await setAsyncData('NOTIFICATION', 'null');
  //     }
  //   }
  // }

  handleConnectivityChange = async (isConnected) => {
    if (isConnected === 'none') {
      Alert.alert('No internet connection', 'Please check your internet settings');
      this.setState({ renderMain: false });
    } else {
      await this.fetchInitialData();
      this.setState({ renderMain: false });
    }
  };

  fetchInitialData = async () => {
    const { fetchInitialAppData, updateFormValue } = this.props;
    const reducerValue = [
      'image', 'firstName', 'gender', 'dob', 'time', 'country',
      'state', 'city', 'accurateTime', 'registrationToken', 'uid'];
    const localStorageData = await multiGetAsync([
      'USER_IMAGE', 'USER_FIRST_NAME', 'USER_GENDER', 'USER_DOB_DATE',
      'USER_DOB_TIME', 'USER_COUNTRY', 'USER_STATE', 'USER_CITY', 'USER_DOB_ACCURATE_TIME',
      'USER_REG_TOKEN', 'USER_ID',
    ]);
    localStorageData.forEach((data, idx) => updateFormValue('userProfile', { [reducerValue[idx]]: idx === 0 ? JSON.parse(data[1]) : data[1] }));
    try {
      await fetchInitialAppData();
      this.setState({ renderMain: false });
    } catch {
      this.setState({ renderMain: false });
    }
    this.setState({ renderMain: false });
  }

  render() {
    const { renderMain } = this.state;
    if (renderMain) {
      return <WelcomeScreen {...this.props} />;
    }
    return <Home {...this.props} />;
  }
}

index.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchInitialAppData: PropTypes.func.isRequired,
  updateFormValue: PropTypes.func.isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
