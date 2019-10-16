import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import MainMenu from '../screens/drawers';
import Main from '../screens/index';

const SCREEN_WIDTH = Dimensions.get('window').width;
const MainNavigator = createDrawerNavigator({
  Home: {
    screen: Main,
  },
}, {
  drawerWidth: SCREEN_WIDTH * 0.8,
  contentComponent: MainMenu,
  drawerBackgroundColor: 'rgba(255,255,255,0.9)',
});

export default createAppContainer(MainNavigator);
