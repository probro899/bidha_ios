import { Icon } from 'native-base';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './tab-screens/home';
import WelComeScreen from '../screens';
import Profile from './tab-screens/profile';
import Settings from './tab-screens/settings';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../config';

const TabNavigator = createBottomTabNavigator(
  {
    Home,
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
          iconName = 'menu';
        }
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

const MainNavigator = createSwitchNavigator({
  WelComeScreen: {
    screen: WelComeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(MainNavigator);
