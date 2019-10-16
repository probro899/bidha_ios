import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text } from 'native-base';
import Header from './Header';

const dataOfWhyVidicAstrology = `Vedic Astrology studies the science of nature including the correspondence behavior of Sun,
Moon, stars and planets which has a direct impact on human life. Vedic Astrology is pseudo–science that relates our behavior character and destiny of individual person on the basic of Time and place of birth.

Our Vedic Astrologer’s aim is to provide the best option for each of our client to avoid
difficulties in their life by birth chat. The entire journey of human life including love, wealth,
luck, success, coincidences etc. were predetermined when we were born. Vedic Astrology is the most relevant, convenient and practical tool to reveal those hidden aspects of life known by far. It has evolved with hand in hand with the evolution of human civilization itself. It has been widely accepted since the era of gods and RISHI for thousands of centuries.

Commonly called with the term JYOTISH SASTRA analyses and reveals different aspects and behavior of life by Date, place and time of birth. Our Vedic Astrologers on the basis of person sastronomical Date, will show the correct way of life avoiding negatively and obstacles to make positive changes and move forward in life.`;

class WhyVedicAstrology extends Component {
  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <Text style={{ padding: 10 }}>{dataOfWhyVidicAstrology}</Text>
        </Content>
      </Container>
    );
  }
}

WhyVedicAstrology.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WhyVedicAstrology;
