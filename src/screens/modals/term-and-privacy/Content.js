import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import Header from './Header';
import Accordion from '../../../common/Accordion';

const dataArray = [
  {
    title: 'Bidha  Inc.',
    content: [
      `Bidha   Inc. ("Bidha,” “our,” “we,” or “us”) . Please read our Terms of Service so you understand what’s up with your use of Bidha. You agree to our Terms of Service (“Terms”) by installing, accessing, or using our apps, services, features, software, or website (together, “Services”).

      (NO ACCESS TO EMERGENCY). Our Services do not provide access to emergency services or emergency services providers, including the police, fire departments, or hospitals, or otherwise connect to public safety answering points.

      IF YOU ARE A BIDHA USER , OUR TERMS CONTAIN A BINDING ARBITRATION PROVISION, WHICH STATES THAT, EXCEPT IF YOU OPT OUT AND EXCEPT FOR CERTAIN TYPES OF DISPUTES, BIDHA AND YOU AGREE TO RESOLVE ALL DISPUTES THROUGH BINDING INDIVIDUAL ARBITRATION, WHICH MEANS THAT YOU WAIVE ANY RIGHT TO HAVE THOSE DISPUTES DECIDED BY A JUDGE OR JURY, AND THAT YOU WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR REPRESENTATIVE ACTIONS. "pLEASE READ THE SECTION BELOW TO LEARN MORE".`
    ],
  },
  {
    title: 'Registration ',
    content: [
      `You must register for our Services using accurate data, provide your current "Date of Birth, Name, Gender including your Birth Location and actual Birth Time"., and, make it sure or if you have some mistakes regarding your data you change it, so we can give you accurate predictions from our astrology. You agree to send us question and get prediction answers from our app.`
    ],
  },
  {
    title: 'Age',
    content: [
      `You must be at least 13 years old to use our Services (or such greater age required in your country for you to be authorized to use our Services without parental approval). In addition to being of the minimum required age to use our Services under applicable law, if you are not old enough to have authority to agree to our Terms in your country, your parent or guardian must agree to our Terms on your behalf.`
    ],
  },
  {
    title: 'Devices and Software',
    content: [
      `You must provide certain devices, software, and data connections to use our Services, otherwise which we do not supply. For as long as you use our Services, you consent to downloading and installing updates to our Services, including automatically.`
    ],
  },
  {
    title: 'Fees and Taxes',
    content: [
      `You are responsible for all carrier data plan and other fees and taxes associated with your use of our Services. We may charge you for our Services, including applicable taxes. Once the order is placed on your active consent, the fee deducted could be non refundable unless abided by the agreement between the user and service provider.`
    ],
  },
];

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
          {Accordion(dataArray)}
        </Content>
      </Container>
    );
  }
}

TermsAndPrivacy.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TermsAndPrivacy;
