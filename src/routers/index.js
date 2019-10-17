import { Icon } from 'native-base';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Main from './tab-screens/home';
import Profile from './tab-screens/profile';
import Pricing from './tab-screens/pricing';
import Settings from './tab-screens/settings';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../config';

const MainNavigator = createBottomTabNavigator(
  {
    Home: Main,
    Profile,
    Settings,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Profile') {
          iconName = 'person';
        } else if (routeName === 'Settings') {
          iconName = 'settings';
        }
        // You can return any component that you like here!
        return <Icon name={iconName} size={25} style={{ color: tintColor }} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: APP_TITLE_TEXT_COLOR,
      inactiveTintColor: 'black',
      activeBackgroundColor: APP_COLOR,
      inactiveBackgroundColor: APP_COLOR,
      showLabel: false,
    },
  },
);

export default createAppContainer(MainNavigator);
