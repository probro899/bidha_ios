import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, View } from 'native-base';
import Header from './Header';
import Accordion from '../../../common/Accordion';

class PrivacyPolicy extends Component {
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
            Respect for your privacy is coded into our DNA. Since we started Bidha, we’ve aspired to build our Services with a set
            of strong privacy principles in mind.
            </Text>

            <Text>Welcome to Bidha</Text>
            <Text>
            Bidha take your privacy seriously, and we are committed to maintaining the privacy of the
            personal information that you provide to us. This policy explains our information practices and
            how we process your information to provide our services. By using Bidha you acknowledge that
            the terms and conditions in this privacy policy will apply to you, as well as to any information
            that you provide us. Please take the time to read through this privacy policy to get acquainted
            with your practices.
            </Text>
            <Text>

            When we say “Bidha,” “our,” “we,” or “us,” we’re talking about Bidha.co. This Privacy Policy
            (“Privacy Policy”) applies to all of our apps, services, features, software, and website (together,
            “Services”) unless specified otherwise.


            Please also read Bidha's "Terms of Service (“Terms”), which describes the terms under which
            you use our Services.
            </Text>
            <Text style={{ margin: 0, marginTop: 10, fontSize: 20 }}>Information We Collect:</Text>
            <Text>
            Bidha receives or collects information when we operate and provide our Services, including when you install, access, or use our Services.
            </Text>
            <Text style={{ margin: 0, marginTop: 10, fontSize: 20 }}>Information You Provide:</Text>
            <Text>
            Your Account Information: You provide your "Date of Birth, Name, Gender including your
            Birth location and actual Birth Time". You provide us the full details data regarding your
            Natal chart. You confirm you are authorized to provide us such details. You may also add other
            information to your account, such as a profile name, profile picture. Your question: We do not
            retain your messages in the ordinary course of providing our Services to you. Once your
            question arrives or delivered, they are store in our servers. Also, your questions are stored on
            your own device. If a question cannot be delivered immediately (for example, if you are offline),
            we provide you to resend query after you become online. Your Connections: To help you
            organize how you communicate with astrologer, we create a direct message towards astrologer
            from the customer, and astrologer gives prediction with your account information.
            </Text>
            <Text style={{ margin: 0, marginTop: 10, fontSize: 20 }}>Customer Support:</Text>
            <Text>
            You may provide us with information related to your use of our Services, and how to contact
            you so we can provide you customer support. For example, you may send us an email with
            information relating to our app performance or other issues. Automatically Collected
            Information Cookies. We use cookies to operate and provide our Services, including to provide
            our Services that are web-based, improve your experiences, understand how our Services are
            being used, and customize our Services. For example, we use cookies to provide Bidha for web
            and desktop and other web-based services. We may also use cookies to understand which of
            our FAQs are most popular and to show you relevant content related to our Services.
            Additionally, we may use cookies to remember your choices, such as your language
            preferences, and otherwise to customize our Services for you. Learn more about how we use
            cookies to provide you our Services. Status Information. We collect information about your
            online and status questions changes on our Services, such as whether you are online (your
            “online status”), when you last used our Services (your “last questions”), and when you last
            updated your information. How We Use Information We use all the information we have to
            help us operate, provide, improve, understand, customize, support, and market our Services.
            </Text>
            <Text style={{ margin: 0, marginTop: 10, fontSize: 20 }}>Our Services:</Text>
            <Text>
            We operate and provide our Services, including providing customer support, and improving,
            fixing, and customizing our Services. We understand how people use our Services, and analyze
            and use the information we have to evaluate and improve our Services, research, develop, and
            test new services and features, and conduct troubleshooting activities. We also use your
            information to respond to you when you contact us. We use cookies to operate, provide,
            improve, understand, and customize our Services. Communications About Our Services. We
            communicate with you about our Services and features and let you know about our terms and
            policies and other important updates. We may provide you marketing for our Services of which
            we are now a part. No Third-Party Banner Ads. We do not allow third-party banner ads on
            Bidha. We have no intention to introduce them, but if we ever do, we will update this policy.
            Information You and We Share You share your information as you use and questions through
            our Services, and we share your information to help us operate, provide, improve, understand,
            customize, support, and market our Services.
            </Text>
            <Text style={{ margin: 0, marginTop: 10, fontSize: 20 }}>Managing Your Information:</Text>
            <Text>
            If you would like to manage, change, limit, or delete your information, we allow you to do that
            through the following tools: Services Settings. You can change your Services settings to manage
            certain information available to other users. You can manage your Birth details re-again.
            Deleting Your Bidha Account. You may delete your Bidha account at any time (including if you
            want to revoke your consent to our use of your information) using our in-app delete my
            account feature. When you delete your Bidha account, your delivered questions are deleted
            from our servers but also you will charge when you asked the questions, as well as any of your
            other information we no longer need to operate and provide our Services. Be mindful that if
            you only delete our Services from your device without using our in-app delete my account
            feature, your information may be stored with us for a longer period.
            </Text>
            <Text style={{ margin: 0, marginTop: 10, fontSize: 20 }}>Updates To Our Policy:</Text>
            <Text>
            We may amend or update our Privacy Policy. We will provide you notice of amendments to this
            Privacy Policy, as appropriate, and update the “Last Modified” date at the end of this Privacy
            Policy. Your continued use of our Services confirms your acceptance of our Privacy Policy, as
            amended. If you do not agree to our Privacy Policy, as amended, you must stop using our
            Services. Please review our Privacy Policy from time to time.
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

PrivacyPolicy.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PrivacyPolicy;
