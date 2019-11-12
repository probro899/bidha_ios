import React from 'react';
import { Separator, Text } from 'native-base';
import { APP_TITLE_TEXT_COLOR } from '../../../../config';

export default (content) => {
  return (
    <Separator key={content.label}>
      <Text
        style={{ fontSize: 12, color: APP_TITLE_TEXT_COLOR }}
      >
        {content.label}
      </Text>
    </Separator>
  );
};
