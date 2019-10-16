import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Header, Right, Body, Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';

const CustomHeader = ({ updateModalValue }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Body>
      <Text style={{ color: APP_TITLE_TEXT_COLOR }}>Birth profile</Text>
    </Body>
    <Right>
      <TouchableOpacity onPress={() => updateModalValue('showProfileModal', false)}>
        <Icon name="close" style={{ color: APP_TITLE_TEXT_COLOR }} />
      </TouchableOpacity>
    </Right>
  </Header>
);
export default CustomHeader;
CustomHeader.propTypes = {
  updateModalValue: PropTypes.func.isRequired,
};
