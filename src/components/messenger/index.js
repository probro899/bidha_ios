import React, { Component } from 'react';
import { View } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import MessageSender from './sender';
import MessageContainer from './container';

class index extends Component {

  state = {};

  render() {
    return (
      <View
        style={{ flexGrow: 1 }}
      >
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>

            <MessageContainer />
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <KeyboardAvoidingView behavior="padding">
              <MessageSender {...this.props} />
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    );
  }
}

export default index;
