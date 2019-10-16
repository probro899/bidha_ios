import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Container, Content,
} from 'native-base';
import { DrawerHeader, DrawerContent } from '../../components/drawer_menu';
import { header, contents } from './PrimaryStructure';

class MenuContent extends Component {
  state ={};

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <DrawerHeader header={header} {...this.props} />
          <Content>
            <DrawerContent contents={contents(this.props)} {...this.props} />
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}

export default MenuContent;
