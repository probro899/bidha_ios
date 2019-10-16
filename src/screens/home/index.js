import React, { Component } from 'react';
import { View, Header, Left, Button, Icon, Body, Right, Title, Thumbnail } from 'native-base';
import PropTypes from 'prop-types';
import Messenger from '../../components/messenger';
import BirthProfile from '../modals/birth-profile';
import ShowTermsAndPrivacyModal from '../modals/term-and-privacy';
import CustomerSupport from '../modals/customer-support';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../config';
import ShowInternetConnection from '../../common/ShowInternetConnectionInfo';
import MessageMenu from '../modals/message-menu';
import Notifications from '../modals/notification';
import HoWBidhaWorks from '../modals/how-it-works';
import WhyVedicAstrology from '../modals/why-vedic-astrology';
import { TouchableOpacity } from 'react-native';

class Index extends Component {
  state={};

  render() {
    const { navigation, updateModalValue, registerForm } = this.props;
    return (
      <View style={{ flexGrow: 1 }}>
        <Header style={{ backgroundColor: APP_COLOR }}>
          <Left>
            <TouchableOpacity transparent onPress={() => navigation.openDrawer()}>
              <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="menu" />
            </TouchableOpacity>
          </Left>
          <Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Title style={{ color: APP_TITLE_TEXT_COLOR }}>Bidha</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => updateModalValue('showProfileModal', true)}>
              {registerForm.userProfile.image
                ? (
                  <Thumbnail
                    style={{ height: 40, width: 40 }}
                    source={{ uri: `data:image/gif;base64,${registerForm.userProfile.image.data}` }}
                  />
              )
                : <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="person" />
              }
            </Button>
          </Right>
        </Header>
        <ShowInternetConnection {...this.props} />
        <Messenger {...this.props} />
        <BirthProfile {...this.props} />
        <ShowTermsAndPrivacyModal {...this.props} />
        <CustomerSupport {...this.props} />
        <MessageMenu {...this.props} />
        <Notifications {...this.props} />
        <HoWBidhaWorks {...this.props} />
        <WhyVedicAstrology {...this.props} />
      </View>
    );
  }
}
export default Index;
Index.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
};
