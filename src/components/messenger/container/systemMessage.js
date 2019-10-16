import React from 'react';
import { View, Text, Thumbnail } from 'native-base';
import PropTypes from 'prop-types';
import AppLogo from '../../../../assets/app_logo1.png';
import { SCREEN_WIDTH, APP_TITLE_TEXT_COLOR } from '../../../config';

const SystemMessage = ({ message }) => {
  return (
    <View style={{ alignItems: 'flex-start', flexDirection: 'row', marginTop: 5, marginBottom: 10 }}>
      <Thumbnail
        small
        source={ AppLogo }
        style={{ marginLeft: 5, height: 20, width: 20, marginTop: 10, marginRight: 5 }}
      />
      <View style={{ flexDirection: 'column'}}>
        <Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 10, marginLeft: 5 }}>
           Sent by system
        </Text>
        <Text style={{
          backgroundColor: '#f1f5f9e5',
          flexGrow: 1,
          elevation: 1,
          padding: 10,
          maxWidth: SCREEN_WIDTH * 0.8,
          shadowColor: '#fff',
          borderRadius: 15,
          borderTopLeftRadius: 0,
        }}
        >
          {message}
        </Text>
      </View>
    </View>
  );
};

export default SystemMessage;
SystemMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
