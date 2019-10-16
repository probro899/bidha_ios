import { APP_LOGO } from '../../config';

export const header = { iconLeft: 'close', title: 'Menu', logo: APP_LOGO };

export const contents = props => ([
  { element: 'static', label: 'Free Question', rightElement: props.main.freeQuestion ? props.main.freeQuestion.filter(obj => obj.status === 1).length : 0 },
  { element: 'static', label: 'Question Price', rightElement: props.main.configuration ? `$${props.main.configuration.questionRate}` : 0 },
  // { element: 'separator', label: 'About astrology' },
  // {
  //   element: 'touchable', iconLeft: 'notifications', label: 'Notifications', iconRight: null,
  // },
  { element: 'touchable', iconLeft: 'people', label: 'Astrologers', iconRight: null },
  // { element: 'separator', label: 'Help & Supports' },
  { element: 'touchable', iconLeft: 'at', label: 'Customer Support', iconRight: null },
  { element: 'touchable', iconLeft: 'help', label: 'How Bidha Works', iconRight: null },
  { element: 'touchable', iconLeft: 'book', label: 'Why Vedic Astrology', iconRight: null },
  { element: 'touchable', iconLeft: 'document', label: 'Terms & Privacy', iconRight: null },
]);

export const footer = { footerNote: 'Our mission is make specialized Vedic astrology to all people in a convennient effective reliable and affordable way' };
