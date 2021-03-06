import React, { Component } from 'react';
import {
  Header, Body, Text, Container, Content,
} from 'native-base';
import { DrawerContent } from '../../components/drawer_menu';
import { contents } from './PrimaryStructure';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../config';

class MenuContent extends Component {
  state ={};

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: APP_COLOR }}>
          <Body>
            <Text style={{ color: APP_TITLE_TEXT_COLOR }}>Settings</Text>
          </Body>
        </Header>
        <Content>
          <DrawerContent contents={contents(this.props)} {...this.props} />
        </Content>
      </Container>
    );
  }
}

export default MenuContent;
