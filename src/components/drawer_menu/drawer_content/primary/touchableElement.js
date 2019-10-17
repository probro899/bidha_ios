import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon, Badge } from 'native-base';
import { APP_TITLE_TEXT_COLOR } from '../../../../config';

const drawerClickHelper = (lable, toggleMenu, updateModalValue, navigation, updateMainValue, main) => {
  const tempLabel = lable.replace(/\s/g, '');
  return updateModalValue(tempLabel, true);
};

const touchableElement = (content, id, { toggleMenu, updateModalValue, navigation, main, updateMainValue }) => {
  return (
    <TouchableOpacity
      onPress={() => drawerClickHelper(content.label, toggleMenu, updateModalValue, navigation, updateMainValue, main)}
      key={content.label}
      style={{
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f5f5f5',
        // backgroundColor: 'rgba(255,255,255,0.8)'
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {content.label === 'Notifications' && main.notification.status
            ? (
              <View style={{ flexDirection: 'row' }}>
                <Icon name={content.iconLeft} style={{ marginRight: 10, fontSize: 20, color: 'black' }} />
                <Badge success style={{ height: 15, justifyContent: 'center', alignItems: 'center', marginLeft: -15, marginTop: -5, marginRight: 5 }}><Text style={{ fontSize: 10, color: 'white'}}>1</Text></Badge>
              </View>
            )
            : <Icon name={content.iconLeft} style={{ marginRight: 10, fontSize: 20, color: APP_TITLE_TEXT_COLOR }} />
             }
          <Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 15 }}>{content.label}</Text>
        </View>
        <Icon name={content.iconRight} style={{ fontSize: 20, color: '#82B1FF' }} />
      </View>
    </TouchableOpacity>
  );
};

export default touchableElement;
