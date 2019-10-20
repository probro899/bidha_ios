import axios from 'axios';
import { ToastAndroid } from 'react-native';
import Stripe, { errorCodes } from 'tipsi-stripe';
import { BASE_URL } from '../config';

Stripe.setOptions({
  publishableKey: 'pk_test_Tn0jb7KXnFlsfeT6XBnvdBny',
  androidPayMode: 'test',
});

const options = rate => ({
  total_price: `${rate}`,
  currency_code: 'USD',
  shipping_address_required: false,
  billing_address_required: true,
  shipping_countries: ['US', 'CA'],
  line_items: [{
    currency_code: 'USD',
    description: 'Question price',
    total_price: `${rate}`,
    unit_price: `${rate}`,
    quantity: '1',
  }],
});

export default async (props) => {
  try {
    props.navigation.closeDrawer();
    // console.log('props in payment stripe', props);
    // console.log(props.navigation);
    const isSupportAndroidPay = await Stripe.deviceSupportsNativePay();
    // console.log(' deviceSupportsNativePay payment method is called', isSupportAndroidPay);
    const canImakeAndroidpayment = await Stripe.canMakeNativePayPayments();
    // console.log('canMakeNativePayPayments method is called', canImakeAndroidpayment);
    // console.log('is device support android pay', isSupportAndroidPay, canImakeAndroidpayment);
    props.navigation.closeDrawer();
    const resToken = await Stripe.paymentRequestWithAndroidPay(options(props.main.configuration.questionRate));
    // console.log('resToken', resToken);
    props.navigation.closeDrawer();
    if (resToken.tokenId) {
      // console.log('token resposne from stripe', resToken.tokenId);
      const res = await axios.post(`${BASE_URL}/app/payment`, { tokenId: resToken.tokenId, amount: props.main.configuration.questionRate  });
      // console.log('response of payment', res.data, res.status);
      if (res.status === 200 && res.data.paymentStatus === 'succeeded') {
        return true;
      }
    } else {
      return false;
    }
  } catch (e) {
    console.log('errror in tipsi-stripe', e);
    ToastAndroid.show(e.message, ToastAndroid.LONG);
    return false;
  }
};
