import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView
} from "react-native";
import AuthNavigator from "./navigation/authNavigation";
import MainTabNavigator from "./navigation/mainNavigation";
import * as firebase from "firebase";
import ApiKeys from "./constants/ApiKeys";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationLoaded: true,
      isAuthenticated: false
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }
  onAuthStateChanged = user => {
    this.setState({ isAuthenticationLoaded: true });
    this.setState({ isAuthenticated: !!user });
  };

  loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([require("./assets/images/welcomeScreen.png")]),
      Font.loadAsync({
        oxygen: require("./assets/fonts/Oxygen-Regular.ttf")
      })
    ]);
  };

  handleLoadingError = error => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (
      (!this.state.isLoadingComplete || !this.state.isAuthenticationLoaded) &&
      !this.props.skipLoadingScreen
    ) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          {this.state.isAuthenticated ? (
            <MainTabNavigator />
          ) : (
            <SafeAreaView>
              <AuthNavigator />
            </SafeAreaView>
          )}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
