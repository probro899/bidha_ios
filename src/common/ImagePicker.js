import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import {
  Icon, Text, Header, Body, Right, View,
} from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH, APP_COLOR, APP_TITLE_TEXT_COLOR } from '../config';

const options = {
  title: 'Select Avatar',
  allowsEditing: true,
  permissionDenied: {
    title: 'test permission deneid title',
  },
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class CutomImagePicker extends Component {

  componentWillUnmount() {
    const { updateModalValue } = this.props;
    updateModalValue('showImagePickerModal', false);
  }

  takePictureHandler = async (updateFormValue, updateModalValue) => {
    updateModalValue('showImagePickerModal', false);
    try {
      await ImagePicker.launchCamera(options, (imageRes) => {
        if (!imageRes.error && !imageRes.didCancel) {
          updateFormValue('userProfile', { image: imageRes });
        }
      });
    } catch (e) {
      throw e;
    }
  }

  pickFromGalleryHandler = async (updateFormValue, updateModalValue) => {
    updateModalValue('showImagePickerModal', false);
    try {
      await ImagePicker.launchImageLibrary(options, (imageRes) => {
        if (!imageRes.error && !imageRes.didCancel) {
          updateFormValue('userProfile', { image: imageRes });
        }
      });
    } catch (e) {
      throw e;
    }
  }

  render() {
    const { modal, updateModalValue, updateFormValue } = this.props;
    return (
      <Modal
        onModalHide={() => updateModalValue('showImagePickerModal', false)}
        backdropOpacity={0.3}
        isVisible={modal.showImagePickerModal}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        swipeDirection="down"
        onSwipe={() => updateModalValue('showImagePickerModal', false)}
      >
        <View style={styles.imageContainerStyle}>
          <Header style={{ backgroundColor: APP_COLOR, height: 40 }}>
            <Body>
              <Text style={{ fontSize: 15, color: APP_TITLE_TEXT_COLOR }}>
                Select Avatar
              </Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => updateModalValue('showImagePickerModal', false)}>
                <Icon name="close" style={{ color: APP_TITLE_TEXT_COLOR }}/>
              </TouchableOpacity>
            </Right>
          </Header>
          <TouchableOpacity onPress={() => this.pickFromGalleryHandler(updateFormValue, updateModalValue)}>
            <View style={styles.imageOptionStyle}>
              <Icon name="images" style={{ marginRight: 10 }} />
              <Text>Choose From Gallery...</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.takePictureHandler(updateFormValue, updateModalValue)}>
            <View style={styles.imageOptionStyle}>
              <Icon name="camera" style={{ marginRight: 10 }} />
              <Text>Take Photo...</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  imageContainerStyle: {
    backgroundColor: '#f5f5f5',
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.4,
    borderWidth: 0.5,
    borderColor: '#757575',
  },
  imageOptionStyle: {
    flexDirection: 'row',
    margin: 10,
  },
});

CutomImagePicker.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
  updateFormValue: PropTypes.func.isRequired,
};
export default CutomImagePicker;
