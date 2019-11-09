import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { CustomButton, RoundButton, LinkButton } from "../components/Buttons";

export default class LogInOne extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/Photo_blurred.png")}
        style={styles.login}
      >
        <Text style={styles.line}> Sign in with</Text>
        <View style={styles.rowView}>
          <RoundButton
            source={require("../assets/images/Facebook_button.png")}
            onPress={() => console.log("FB")}
          />
          <RoundButton
            source={require("../assets/images/Twiter_button.png")}
            onPress={() => console.log("twit")}
          />
          <RoundButton
            source={require("../assets/images/Google_Button.png")}
            onPress={() => console.log("google")}
          />
        </View>
        <Text style={styles.line}> or </Text>
        <CustomButton title="LOGIN" onPress={() => console.log("iAA")} />
        <LinkButton
          title="create an account >"
          style={styles.linkButton}
          onPress={() => this.props.navigation.navigate("Regitster")}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#bdbdbd",
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "oxygen",
    paddingBottom: 40
  },
  line: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
    fontFamily: "oxygen"
  },
  rowView: {
    flexDirection: "row",
    marginTop: -20
  },
  linkButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    color: "white",
    fontFamily: "oxygen",
    marginBottom: 20
  }
});
