import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Text, Icon } from 'native-base';

export const renderHeaderHelper = (data, expended) => {
  return (
    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name={data.iconLeft}
          style={{
            marginRight: 10,
            marginLeft: 5,
            fontSize: 20,
            color: '#82B1FF',
          }}
        />
        <Text style={{ color: expended ? '#82B1FF' : '#000' }}>{data.title}</Text>
      </View>
      <View>
        {expended
          ? <Icon name="arrow-dropup" style={{ color: '#82B1FF' }} />
          : <Icon name="arrow-dropdown" style={{ color: '#82B1FF' }} />
      }
      </View>
    </View>
  );
};

const renderContentView = (content, onPresSendIcon, updateModalValue) => {
  return (
    <View
      key={content.question}
      style={styles.contentStyle}
    >
      <View style={styles.contentTextViewStyle}>
        <Text style={{ color: '#757575' }}>{content.question}</Text>
      </View>
      <View style={styles.contentIconStyle}>
        <TouchableOpacity
          onPress={() => {
            onPresSendIcon('message', content.question);
            updateModalValue('showIdeaToAsk', false);

          }}
        >
          <Icon name="send" style={{ color: 'black' }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const renderContentHelper = ({ content }, onPresSendIcon, updateModalValue) => {

  return (
    <View>
      {content.map(contentItem => renderContentView(contentItem, onPresSendIcon, updateModalValue))}
    </View>
  );
};

renderContentHelper.defaultProps = {
  content: [],
};

renderContentHelper.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any),
};

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  contentTextViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    borderBottomWidth: 0.5,
    borderBottomColor: '#757575',
    marginLeft: 10,
    backgroundColor: '#f5f5f5',
  },
  contentIconStyle: {
    flex: 1,
    maxWidth: 50,
    flexDirection: 'row',
    marginRight: 5,
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
});
