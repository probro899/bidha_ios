import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { View, Text, Thumbnail, Spinner } from 'native-base';
import { format } from 'date-fns';
import StarRating from 'react-native-star-rating';
import { SCREEN_WIDTH, BASE_URL, APP_TITLE_TEXT_COLOR } from '../../../config';

const renderStarRating = (message, updateStarRating, starRatingStatus) => {
  return (
    <View style={{ flexDirection: 'row', width: '85%', justifyContent: 'flex-end', padding: 2 }}>
      <View style={{ flexDirection: 'row', marginRight: 5 }}>
        <StarRating
          fullStarColor={APP_TITLE_TEXT_COLOR}
          halfStarColor={APP_TITLE_TEXT_COLOR}
          containerStyle={{ width: 100 }}
          starSize={15}
          disabled={false}
          maxStars={5}
          rating={message.question.questionDetails.starRating}
          selectedStar={star => updateStarRating(star, message.answer.answerDetail.id, message.question.questionDetails.id)}
        />
      </View>
      { starRatingStatus === message.answer.answerDetail.id && <Spinner size="small" color={APP_TITLE_TEXT_COLOR} style={{ width: 10, height: 10 }} /> }
    </View>
  );
};

class AstrologerMessage extends Component {
  state = {};

  openMenuHandler = (qid) => {
    const { props } = this.props;
    props.updateModalValue('showMessageMenuError', null);
    props.updateModalValue('showMessageMenuSuccess', null);
    props.updateModalValue('showMessageMenuLoading', null);
    props.updateModalValue('showMessageMenuModal', { type: 'answer', qid });
  }

  render() {
    const { message, props } = this.props;
    return (
      <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
        <Thumbnail
          small
          source={{ uri: `${BASE_URL}/images/${message.answer.astrologerDetail.image}` }}
          style={{marginLeft: 5, height: 25, width: 25, marginTop: 20, marginRight: 5 }}
        />
        <View style={{ marginTop: 10, margin: 5 }}>
          <Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 10, marginLeft: 10 }}>
            {`${format(message.answer.answerDetail.modAnsTimeStamp, 'MMM d yyyy')} by Astro: `}
            {message.answer.astrologerDetail.name}
          </Text>
          <TouchableOpacity
            onLongPress={() => this.openMenuHandler(message.answer.answerDetail.questionId)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexGrow: 1,
              maxWidth: '90%',
            }}>
            <Text style={{
              backgroundColor: '#f1f5f9e5',
              flexGrow: 1,
              elevation: 1,
              padding: 10,
              maxWidth: SCREEN_WIDTH * 0.8,
              marginLeft: -5,
              shadowColor: '#fff',
              borderRadius: 15,
              borderTopLeftRadius: 0,
            }}
            >
              { message.answer.answerDetail.modAnswer}
            </Text>
          </TouchableOpacity>
          { renderStarRating(message, props.upateStarRating, props.starRatingStatus) }
        </View>
      </View>
    );
  }
}
export default AstrologerMessage;
AstrologerMessage.propTypes = {
  message: PropTypes.objectOf(PropTypes.any).isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};

