import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, View } from 'native-base';
import Header from './Header';
import Accordion from '../../../common/Accordion';

class TermsAndPrivacy extends Component {
  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <View style={{ padding: 10 }}>
            <Text>
              Bidha Inc. ("Bidha,” “our,” “we,” or “us”). Please read our Terms of Service so you understand
              what’s up with your use of Bidha. You agree to our Terms of Service (“Terms”) by installing,
              accessing, or using our apps, services, features, software, or website (together, “Services”). (NO
              ACCESS TO EMERGENCY). Our Services do not provide access to emergency services or
              emergency services providers, including the police, fire departments, or hospitals, or otherwise
              connect to public safety answering points. IF YOU ARE A BIDHA USER, OUR TERMS CONTAIN A
              BINDING ARBITRATION PROVISION, WHICH STATES THAT, EXCEPT IF YOU OPT OUT AND EXCEPT
              FOR CERTAIN TYPES OF DISPUTES, BIDHA AND YOU AGREE TO RESOLVE ALL DISPUTES
              THROUGH BINDING INDIVIDUAL ARBITRATION, WHICH MEANS THAT YOU WAIVE ANY RIGHT
              TO HAVE THOSE DISPUTES DECIDED BY A JUDGE OR JURY, AND THAT YOU WAIVE YOUR RIGHT
              TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR REPRESENTATIVE ACTIONS.
              "PLEASE READ THE SECTION BELOW TO LEARN MORE".
            </Text>
            <Text style={{ marginTop: 10, margin: 0, fontSize: 20 }}>About our services Registration :</Text>
            <Text>
            You must register for our Services using accurate data, provide your current &quot;Date of Birth,
            Name, Gender including your Birth Location and actual Birth Time&quot;, and, make it sure or if you
            have some mistakes regarding your data you may change it, so we can give you accurate
            predictions from our astrology. You agree to send us question and get prediction answers from
            our app.
            </Text>
            <Text style={{ margin: 0, fontSize: 20, marginTop: 20}}>Age :</Text>
            <Text>
            You must be at least 13 years old to use our Services (or such greater age required in your
            country for you to be authorized to use our Services without parental approval). In addition to
            being of the minimum required age to use our Services under applicable law, if you are not old
            enough to have authority to agree to our Terms in your country, your parent or guardian must
            agree to our Terms on your behalf.
            </Text>
            <Text style={{ margin: 0, fontSize: 20, marginTop: 20}}> Devices and Software:</Text>
            <Text>
            You must provide certain devices, software, and internet connections to use our Services
            otherwise which we do not supply. For as long as you use our Services, you consent to
            downloading and installing updates to our Services, including automatically.
            </Text>
            <Text style={{ margin: 0, fontSize: 20, marginTop: 20}}>Fee and Taxes:</Text>
            <Text>
            You are responsible for all carrier data plan and other fees and taxes associated with your use
            of our Services. We may charge you for our Services, including applicable taxes. Once the order
            is placed on your active consent, the fee deducted could be non refundable unless abided by
            the agreement between the user and service provider.
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

TermsAndPrivacy.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TermsAndPrivacy;
