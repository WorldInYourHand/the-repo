import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import AuthNavigator from "./navigation/authNavigation";

export default function App(props) {
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
        <AuthNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    // Asset.loadAsync([require("./assets/images/welcomeScreen.png")]),
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
