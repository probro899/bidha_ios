import React, { Component } from 'react';
import { View, Header, Button, Icon, Body, Right, Title, Thumbnail, Text } from 'native-base';
import PropTypes from 'prop-types';
import Messenger from '../../components/messenger';
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
import TodayPrediction from '../modals/today-prediction';
import PrivacyPolicy from '../modals/privacy-policies';

class Index extends Component {
  state={};

  render() {
    const { updateModalValue, registerForm } = this.props;
    return (
      <View style={{ flexGrow: 1 }}>
        <Header style={{ backgroundColor: APP_COLOR, width: '100%' }}>
          <Body style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Thumbnail source={AppIcon} square style={{ height: 30, width: 30, marginLeft: 20 }} />
              <Title style={{ color: APP_TITLE_TEXT_COLOR, marginLeft: 10, justifyContent: 'center' }}>
                <Text style={{ color: APP_TITLE_TEXT_COLOR, textAlign: 'center' }}>Bidha Live Prediction</Text>
              </Title>
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
        <ShowTermsAndPrivacyModal {...this.props} />
        <CustomerSupport {...this.props} />
        <MessageMenu {...this.props} />
        <Notifications {...this.props} />
        <HoWBidhaWorks {...this.props} />
        <WhyVedicAstrology {...this.props} />
        <IdeatToAsk {...this.props} />
        <Astrologers {...this.props} />
        <TodayPrediction {...this.props} />
        <PrivacyPolicy {...this.props} />
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
