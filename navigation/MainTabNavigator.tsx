import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LogInOne from '../screens/login-screen-firebase';
import { createStackNavigator } from 'react-navigation-stack';



const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LoginStack = createStackNavigator(
  {
    LoginScreen: LogInOne,
  }
);

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

LoginStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    LoginStack,
//   LinksStack,
//   SettingsStack,
});


export default tabNavigator;
