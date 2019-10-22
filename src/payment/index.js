import axios from 'axios';
import Stripe, { errorCodes } from 'tipsi-stripe';
import { BASE_URL } from '../config';

Stripe.setOptions({
  publishableKey: 'pk_test_Tn0jb7KXnFlsfeT6XBnvdBny',
  merchantId: 'merchant.com.bidhaco.bidha', // Optional
});

// const options = rate => ({
//   total_price: `${rate}`,
//   currency_code: 'USD',
//   shipping_address_required: false,
//   billing_address_required: true,
//   shipping_countries: ['US', 'CA'],
//   line_items: [{
//     currency_code: 'USD',
//     description: 'Question price',
//     total_price: `${rate}`,
//     unit_price: `${rate}`,
//     quantity: '1',
//   }],
// });
const items = [{
  label: 'Whisky',
  amount: '50.00',
}, {
  label: 'Tipsi, Inc',
  amount: '50.00',
}];

const shippingMethods = [{
  id: 'fedex',
  label: 'FedEX',
  detail: 'Test @ 10',
  amount: '10.00',
}];

const options = {
  requiredBillingAddressFields: ['all'],
  requiredShippingAddressFields: ['all'],
  shippingMethods,
};


export default async (props) => {
  try {
    // props.navigation.closeDrawer();
    // console.log('props in payment stripe', props);
    // console.log(props.navigation);
    // const isSupportAndroidPay = await Stripe.openApplePaySetup();
    // console.log(' deviceSupportsNativePay payment method is called', isSupportAndroidPay);
    const canImakeAndroidpayment = await Stripe.deviceSupportsApplePay();
    console.log('canMakeNativePayPayments method is called', canImakeAndroidpayment);
    // console.log('is device support android pay', isSupportAndroidPay, canImakeAndroidpayment);
    // props.navigation.closeDrawer();
    const resToken = await Stripe.paymentRequestWithApplePay(items, options);
    console.log('resToken', resToken);
    // props.navigation.closeDrawer();
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
    // ToastAndroid.show(e.message, ToastAndroid.LONG);
    return false;
  }
};
