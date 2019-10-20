import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Header, Right, Body, Text, Icon } from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';

const CustomHeader = ({ updateModalValue }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Body>
      <Text style={{ color: APP_TITLE_TEXT_COLOR }}>Privacy Policy</Text>
    </Body>
    <Right>
      <TouchableOpacity onPress={() => updateModalValue('PrivacyPolicy', false)}>
        <Icon name="close" style={{ color: APP_TITLE_TEXT_COLOR }} />
      </TouchableOpacity>
    </Right>
  </Header>
);

export default CustomHeader;
CustomHeader.propTypes = {
  updateModalValue: PropTypes.func.isRequired,
};
