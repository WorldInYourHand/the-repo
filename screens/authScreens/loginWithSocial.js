import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { BigButton, SocialButton, LinkButton } from "../../components/buttons";
import * as colors from "../../constants/Colors";

export default class LoginWithSocial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  onRegisterPress = () => {
    this.props.navigation.navigate("RegisterScreen");
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/home_screen.png")}
        style={styles.login}
      >
        <View style={styles.header}>
          <Text style={styles.line}>Sign in with</Text>
        </View>
        <View style={styles.rowView}>
          <SocialButton
            source={require("../../assets/images/fb_button.png")}
            onPress={() => console.log("fb")}
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
        <View style={styles.bottom}>
          <BigButton
            title="LOGIN"
            onPress={() => this.props.navigation.navigate("LoginWithAcc")}
          />
        </View>
        <View style={styles.last}>
          <LinkButton
            title="create an account >"
            style={styles.linkButton}
            onPress={this.onRegisterPress}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "oxygen"
  },
  line: {
    color: colors.default.buttonWhite,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
    fontFamily: "oxygen"
  },
  rowView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  linkButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    color: colors.default.buttonWhite,
    fontFamily: "oxygen",
    justifyContent: "center"
  },
  header: {
    flex: 3,
    justifyContent: "flex-end"
  },
  bottom: {
    justifyContent: "flex-start",
    alignContent: "center",
    flexDirection: "column",
    width: "100%",
    alignItems: "center"
  },
  last: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
