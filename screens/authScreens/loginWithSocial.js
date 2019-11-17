import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { BigButton, SocialButton, LinkButton } from "../../components/buttons";

export default class LoginWithSocial extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/photo_blurred.png")}
        style={styles.login}
      >
        <Text style={styles.line}>Sign in with</Text>
        <View style={styles.rowView}>
          <SocialButton
            source={require("../../assets/images/fb_button.png")}
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          />
          <SocialButton
            source={require("../../assets/images/tw_button.png")}
            onPress={() => console.log("twit")}
          />
          <SocialButton
            source={require("../../assets/images/google_button.png")}
            onPress={() => console.log("google")}
          />
        </View>
        <Text style={styles.line}>or</Text>
        <BigButton
          title="LOGIN"
          onPress={() => this.props.navigation.navigate("LoginWithAcc")}
        />
        <LinkButton
          title="create an account >"
          style={styles.linkButton}
          onPress={() => this.props.navigation.navigate("RegisterScreen")}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "oxygen",
    paddingBottom: 150
  },
  line: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 24,
    marginVertical: 30,
    fontFamily: "oxygen"
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center"
  },
  linkButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    color: "white",
    fontFamily: "oxygen",
    marginBottom: 130
  }
});
