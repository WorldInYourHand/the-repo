import React, { useState } from "react";
import { AppLoading } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";

export default function App(props) {
  const AppContainer = createAppContainer(AppNavigator);
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppContainer />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      oxygen: require("./assets/fonts/Oxygen-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
