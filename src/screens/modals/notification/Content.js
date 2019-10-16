import React from 'react';
import { ScrollView } from 'react-native';
import {
  View, Text, Thumbnail,
} from 'native-base';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import AppLogo from '../../../../assets/app_logo1.png';

const renderNotification = (notifications, idx) => (
  <View key={idx} style={{ alignItems: 'flex-start', flexDirection: 'row', marginTop: 5, marginBottom: 10, width: '100%'  }}>
    <Thumbnail
      small
      source={ AppLogo }
      style={{ marginLeft: 5, height: 20, width: 20, marginTop: 10, marginRight: 5 }}
    />
    <View style={{ flexDirection: 'column', width: '95%' }}>
      <Text style={{ color: '#757575', fontSize: 10, marginLeft: 5 }}>
        {`Sent by system on ${format(notifications.timeStamp, 'mmm d yyyy')}`}
      </Text>
      <Text style={{
        backgroundColor: '#FFFFFF9F',
        flexGrow: 1,
        elevation: 1,
        padding: 10,
        maxWidth: '90%',
        shadowColor: '#fff',
        borderRadius: 15,
        borderTopLeftRadius: 0,
      }}
      >
        { notifications.body}
      </Text>
    </View>
  </View>
);

const CustomContent = ({ main }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }}>
      {main.notification.data.map((notification, idx) => renderNotification(notification, idx))}
    </ScrollView>
  );
};

CustomContent.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default CustomContent;
