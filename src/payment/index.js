import axios from 'axios';
import Stripe, { errorCodes } from 'tipsi-stripe';
import { BASE_URL } from '../config';

Stripe.setOptions({
  publishableKey: 'pk_test_Tn0jb7KXnFlsfeT6XBnvdBny',
  merchantId: 'merchant.com.bidhaco.bidha', // Optional
});

const items = (price) => [{
  label: 'Question Price',
  amount: `${price}`,
}, {
  label: 'Bidha.co',
  amount: `${price}`,
}];

const options = {
  requiredBillingAddressFields: ['all'],
  requiredShippingAddressFields: ['all'],
};


export default async (props) => {
  try {
    const canImakeAndroidpayment = await Stripe.deviceSupportsApplePay();
    const resToken = await Stripe.paymentRequestWithApplePay(items(props.main.configuration.questionRate), options);
    if (resToken.tokenId) {
      const res = await axios.post(`${BASE_URL}/app/payment`, { tokenId: resToken.tokenId, amount: props.main.configuration.questionRate  });
      if (res.status === 200 && res.data.paymentStatus === 'succeeded') {
        return true;
      }
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
