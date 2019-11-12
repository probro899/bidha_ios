import React, { Component } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { Header, Body, Title, Text, Right, Button, Icon, View, Container, Content } from 'native-base';
import ModalContent from './Content';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';

const contentMessage = `Please join hands today with the team of our pro astrologer with the history of years of research who are capable of guiding you towards the right direction, decision and steps in life. They are available for you 24/7.`;

class CustomerSupport extends Component {
  state = {};

  render() {
    const { modal, updateModalValue, main } = this.props;
    return (
      <Modal
        onBackButtonPress={() => updateModalValue('Astrologers', false)}
        animationInTiming={300}
        animationOutTiming={300}
        isVisible={modal.Astrologers}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <Container>
          <Header style={{ backgroundColor: APP_COLOR, width: '100%' }}>
            <Body>
              <Title><Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 15 }}>Our Astrologers</Text></Title>
            </Body>
            <Right>
              <Button transparent onPress={() => updateModalValue('Astrologers', false)}>
                <Icon
                  name="close"
                  style={{ color: APP_TITLE_TEXT_COLOR }}
                />
              </Button>
            </Right>
          </Header>
          <Content>
            <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
              <Text
                style={{
                  padding: 10,
                  color: '#757575',
                  borderBottomWidth: 0.5,
                  borderBottomColor: '#757575',
                }}
              >
                {contentMessage}
              </Text>
              <ModalContent {...this.props} data={main.astrologerList} />
            </View>
          </Content>
        </Container>
      </Modal>
    );
  }
}

export default CustomerSupport;
CustomerSupport.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
