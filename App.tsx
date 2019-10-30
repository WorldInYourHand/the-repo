import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'

import LogInOne from './components/login-screen-firebase';
import * as Font from 'expo-font';
import { View } from 'react-native';


const RootStack = createStackNavigator( {
  LogInOne: {screen: LogInOne }
} )

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'oxygen': require('./assets/fonts/Oxygen-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return<LogInOne/>
  }
}

