import React, { Component } from 'react';
import {
  View, Header, Body, Text,
} from 'native-base';
import { DrawerContent } from '../../components/drawer_menu';
import { contents } from './PrimaryStructure';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../config';

class MenuContent extends Component {
  state ={};

  render() {
    return (
      <View>
        {/* <DrawerHeader header={header} {...this.props} /> */}
        <Header style={{ backgroundColor: APP_COLOR }}>
          <Body>
            <Text style={{ color: APP_TITLE_TEXT_COLOR }}>Settings</Text>
          </Body>
        </Header>
        <View>
          <DrawerContent contents={contents(this.props)} {...this.props} />
        </View>
      </View>
    );
  }
}

export default MenuContent;
