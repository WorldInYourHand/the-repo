// import React from 'react';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';
// import LogInOne from '../screens/login-screen-firebase';

// export default createAppContainer(
//   createSwitchNavigator({
//     // You could add another route here for authentication.
//     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//     Main: LogInOne,
//   })
// );

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LogInOne from "../screens/login-screen-firebase";
import Register from "../screens/register-screen";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LogInOne,
      navigationOptions: {
        header: null
      }
    },
    Regitster: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);
