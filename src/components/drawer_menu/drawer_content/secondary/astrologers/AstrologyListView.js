import React from 'react';
import { Thumbnail, ListItem, Left, Body, Text } from 'native-base';
import PropTypes from 'prop-types';
import { BASE_URL } from '../../../../../config';

const AstrologerListView = ({ astrologer }) => {
  return (
    <ListItem avatar key={astrologer.id}>
      <Left>
        <Thumbnail source={{ uri: `${BASE_URL}/images/${astrologer.image}` }} />
      </Left>
      <Body>
        <Text>{`Astro: ${astrologer.name}`}</Text>
        <Text style={{ color: '#757575', fontSize: 15 }}>{`${astrologer.qualification}`}</Text>
      </Body>
    </ListItem>
  );
};
export default AstrologerListView;
AstrologerListView.propTypes = {
  astrologer: PropTypes.objectOf(PropTypes.any).isRequired,
};
