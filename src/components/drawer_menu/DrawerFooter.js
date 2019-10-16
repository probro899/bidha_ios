import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Separator, Text } from 'native-base';

const DrawerFooter = ({ footer }) => {
  return (
    <Separator style={styles.separatorStyle}>
      <Text style={styles.separatorTextStyle}>
        {footer.footerNote}
      </Text>
    </Separator>
  );
};

const styles = StyleSheet.create({
  separatorTextStyle: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  separatorStyle: {
    height: 75,
  },
});

export default DrawerFooter;
DrawerFooter.propTypes = {
  footer: PropTypes.objectOf(PropTypes.any).isRequired,
};

