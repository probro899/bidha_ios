import React, { Component } from 'react';
import { View, Header, Left, Button, Icon, Body, Right, Title, Thumbnail } from 'native-base';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
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
import IdeatToAsk from '../modals/ideato-ask';
import AppIcon from '../../../assets/app_logo1.png';
import Astrologers from '../modals/astrologer';

class Index extends Component {
  state={};

  render() {
    const { navigation, updateModalValue, registerForm } = this.props;
    return (
      <View style={{ flexGrow: 1 }}>
        <Header style={{ backgroundColor: APP_COLOR, width: '100%' }}>
          {/* <Left>
            <TouchableOpacity transparent onPress={() => navigation.openDrawer()}>
              <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="menu" />
            </TouchableOpacity>
          </Left> */}
          <Body style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Thumbnail source={AppIcon} small square />
              <Title style={{ color: APP_TITLE_TEXT_COLOR, marginLeft: 10 }}>Bidha Live Prediction</Title>
            </View>
          </Body>
          <Right>
            <Button transparent onPress={() => updateModalValue('showIdeaToAsk', true)}>
              {registerForm.userProfile.image
                ? (
                  <Thumbnail
                    style={{ height: 40, width: 40 }}
                    source={{ uri: `data:image/gif;base64,${registerForm.userProfile.image.data}` }}
                  />
                )
                : <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="bulb" />
              }
            </Button>
          </Right>
        </Header>
        <ShowInternetConnection {...this.props} />
        <Messenger {...this.props} />
        {/* <BirthProfile {...this.props} /> */}
        <ShowTermsAndPrivacyModal {...this.props} />
        <CustomerSupport {...this.props} />
        <MessageMenu {...this.props} />
        <Notifications {...this.props} />
        <HoWBidhaWorks {...this.props} />
        <WhyVedicAstrology {...this.props} />
        <IdeatToAsk {...this.props} />
        <Astrologers {...this.props} />
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
