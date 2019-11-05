import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import Register from './components/register-screen';
import LogInOne from './components/login-screen-firebase';
import * as Font from 'expo-font';
import { View } from 'react-native';


const RootStack = createStackNavigator( {
  Register: {screen: Register }
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
    return<Register />
  }
}

