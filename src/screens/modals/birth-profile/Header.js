import React from 'react';
import {
  Header, Body, Text,
} from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';

const CustomHeader = () => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Body>
      <Text style={{ color: APP_TITLE_TEXT_COLOR }}>Birth profile</Text>
    </Body>
  </Header>
);
export default CustomHeader;

