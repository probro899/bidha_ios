import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import { View, Text, Button, Icon, Spinner } from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';
import doPayment from '../../../payment';

const MainMenu = ({ deleteMessage, updateModalValue, modal, sendMessageHandler, updateMessage }) => {
  return (
    <View style={{ width: 150, height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 150, marginBottom: 10 }}>
        <Button
          style={{ height: 20, margin: 5 }}
          full
          danger
          onPress={() => deleteMessage(modal.showMessageMenuModal)}
        >
          <Text>Delete</Text>
          <Icon name="close" style={{ color: 'white', fontSize: 20, marginLeft: -5 }} />
        </Button>
        {(modal.showMessageMenuModal.type === 'question' && modal.showMessageMenuModal.paymentStatus !== '1') &&
        (
          <Button
            style={{ height: 20, margin: 5 }}
            full
            primary
            onPress={async () => {
              updateMessage('messageStatus', 'loading');
              updateModalValue('showMessageMenuLoading', true);
              const paymentStatus = await doPayment();
              if (paymentStatus) {
                await sendMessageHandler({ paymentStatus: true, type: 'update' });
              } else {
                await sendMessageHandler({ paymentStatus: false, type: 'update' });
              }
            }
            }
          >
            <Text>Resend</Text>
            <Icon name="refresh" style={{ color: 'white', fontSize: 20, marginLeft: -5 }} />
          </Button>
        )}
      </View>
    </View>
  );
};

MainMenu.propTypes = {
  deleteMessage: PropTypes.func.isRequired,
  updateModalValue: PropTypes.func.isRequired,
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  sendMessageHandler: PropTypes.func.isRequired,
  updateMessage: PropTypes.func.isRequired,
};

const MenuMessageStatus = ({ modal }) => {
  if (modal.showMessageMenuLoading) {
    return <View style={{ width: 150, height: 'auto' }}><Spinner size="small" style={{ color: APP_TITLE_TEXT_COLOR }} /></View>;
  } if (modal.showMessageMenuError) {
    return (
      <View style={{ width: 150, height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="close-circle" style={{ fontSize: 20, color: 'red' }} />
        <Text style={{ color: 'red', fontSize: 15 }}>{modal.showMessageMenuError}</Text>
      </View>
    );
  } if (modal.showMessageMenuSuccess) {
    return (
      <View style={{ width: 150, height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="checkmark-circle" style={{ fontSize: 20, color: 'green' }} />
        <Text style={{ color: 'green', fontSize: 15 }}>{modal.showMessageMenuSuccess}</Text>
      </View>
    );
  }
};

const MessageMenu = ({ modal, updateModalValue, deleteMessage, sendMessageHandler, updateMessage }) => {

  return (
    <Modal
      onBackButtonPress={() => updateModalValue('showMessageMenuModal', false)}
      animationInTiming={300}
      animationOutTiming={300}
      backdropOpacity={0}
      isVisible={typeof modal.showMessageMenuModal === 'object'}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      swipeDirection="down"
      onSwipe={() => updateModalValue('showMessageMenuModal', false)}
      style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', margin: 0 }}
    >
      <View style={{ width: 150, height: 'auto', backgroundColor: '#f5f5f5' }}>
        <View style={{ width: 150, backgroundColor: APP_COLOR, height: 'auto', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => updateModalValue('showMessageMenuModal', false)}>
            <Icon name="close" style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 20, marginRight: 5 }} />
          </TouchableOpacity>
        </View>
        { (modal.showMessageMenuLoading || modal.showMessageMenuError || modal.showMessageMenuSuccess)
          ? <MenuMessageStatus modal={modal} />
          : (
            <MainMenu
              updateModalValue={updateModalValue}
              deleteMessage={deleteMessage}
              modal={modal}
              sendMessageHandler={sendMessageHandler}
              updateMessage={updateMessage}
            />
          )
        }
      </View>
    </Modal>
  );
};

export default MessageMenu;
MessageMenu.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  sendMessageHandler: PropTypes.func.isRequired,
  updateMessage: PropTypes.func.isRequired,
};
