import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Card, View } from 'native-base';
import Selection from 'react-native-picker-select';
import * as Progress from 'react-native-progress';
import Header from './Header';
import { SCREEN_WIDTH } from '../../../config';

const dataOfTodayPrediction = {
  Aries: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.3 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Taurus: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Gemini: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Cancer: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Leo: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Virgo: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Libra: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Scorpio: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Sagittarius: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Capricorn: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Aquarius: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
  Pisces: [{ title: 'Love', value: 0.6 }, {title: 'Self', value: 0.7 }, {title: 'Everyday Life', value: 0.5 }, {title: 'Education', value: 0.8 }, {title: 'Money', value: 0.6 }, {title: 'Bussiness', value: 0.8 }],
};

const findColor = (value) => {
  if (value < 0.4) {
    return 'red';
  }
  if ((value >= 0.4) && (value <= 0.7)) {
    return 'yellow';
  }
  return 'green';
};

const todayPredictionItems = (value) => {
  return (
    value.map((v, idx) => {
      return (
        <Card key={idx} style={{ marginTop: 10, height: 50, justifyContent: 'center', display: 'flex', alignItems: 'center', width: SCREEN_WIDTH - 10 }}>
          <Text style={{ color: 'green', fontSize: 20 }}>{`${v.title}(${v.value * 100}%)`}</Text>
          <Progress.Bar progress={v.value} width={SCREEN_WIDTH - 20} height={20} color={findColor(v.value)} />
        </Card>
      );
    })
  );
};

class TodayPrediction extends Component {
  state={ sign: null };

  static navigationOptions = {
    header: null,
  }

  zodiacSignChangeHandler = (e) => {
    this.setState({ sign: e });
  }

  render() {
    console.log('zodiac sign in cotent', Object.keys(dataOfTodayPrediction).map(k => ({ label: k, value: k })));
    const { sign } = this.state;
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <Card>
            <Selection
              onValueChange={this.zodiacSignChangeHandler}
              items={Object.keys(dataOfTodayPrediction).map(k => ({ label: k, value: k }))}
              placeholder={{ label: 'Select zodiac sign', value: null }}
              value={sign}
            />
          </Card>
          <Text style={{ color: 'green', fontSize: 22, marginTop: 10, marginBottom: 10 }}>Today Suceess Rate:</Text>
          {sign && todayPredictionItems(dataOfTodayPrediction[sign])}
        </Content>
      </Container>
    );
  }
}

TodayPrediction.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TodayPrediction;
