import React, { Component } from 'react';
import { View } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MessageSender from './sender';
import MessageContainer from './container';

class index extends Component {

  state = {};

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View
          style={{ flexGrow: 1 }}
        >
        
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
        
            <View style={{ flex: 1 }}>
              <MessageContainer />
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
              {/* <KeyboardAwareScrollView> */}
              <MessageSender {...this.props} />
              {/* </KeyboardAwareScrollView> */}
            </View>
          
          </View>
        
        </View>
      </KeyboardAwareScrollView>
     
    );
  }
}

export default index;
