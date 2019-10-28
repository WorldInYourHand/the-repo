import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'

import LogInOne from './components/login-screen-firebase';

const RootStack = createStackNavigator( {
  LogInOne: {screen: LogInOne }
} )

export default function App() {
  return <LogInOne/>
}

