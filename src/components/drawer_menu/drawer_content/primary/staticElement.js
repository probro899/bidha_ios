import React from 'react';
import {
  View, ListItem, Text, Left, Right, Badge,
} from 'native-base';
import { APP_TITLE_TEXT_COLOR } from '../../../../config';

export default (content, idx) => {
  const color = idx % 2;
  return (
    <View key={content.label}>
      <ListItem style={{ marginLeft: 0 }}>
        <Left style={{ marginLeft: 10 }}>
          <Text style={{ color: APP_TITLE_TEXT_COLOR }}>{content.label}</Text>
        </Left>
        <Right>
          <Badge
            primary={color === 0}
            success={color !== 0}
            style={{ minWidth: 50 }}
          >
            <Text>
              {content.rightElement}
            </Text>
          </Badge>
        </Right>
      </ListItem>
    </View>
  );
};
