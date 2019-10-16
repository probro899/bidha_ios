import React, { Component } from 'react';
import { Animated } from 'react-native';
import { View, Text, Thumbnail } from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../config';

class WelcomeScreen extends Component {
  state = { fadeAnim: new Animated.Value(0) };

  componentDidMount() {
    const { fadeAnim } = this.state;
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
      },
    ).start();
  }

  render() {
    const { fadeAnim } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: APP_COLOR }}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Welcome to bidha</Text> */}
          <Thumbnail style={{ height: 150, width: 150 }} source={require('../../../assets/app_logo1.png')} />
        </Animated.View>
        <Text style={{ marginTop: 20, color: APP_TITLE_TEXT_COLOR }}>Loading ...</Text>
      </View>
    );
  }
}
export default WelcomeScreen;
