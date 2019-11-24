import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import { InputField } from "../../components/inputs";
import { BigButton, BackButton } from "../../components/buttons";
import * as firebase from "firebase";
import * as colors from "../../constants/Colors";

export default class ForgotenPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  goBack = () => {
    this.props.navigation.navigate("LoginWithAcc");
  };

  onResetPasswordPress = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(
        () => {
          Alert.alert("Password reset email has been sent.");
        },
        error => {
          Alert.alert(error.message);
        }
      );
  };
  render() {
    const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

    return (
      <ImageBackground
        source={require("../../assets/images/photo_blurred.png")}
        style={{
          flex: 1,
          position: "relative",
          width: "100%",
          height: "100%",
          justifyContent: "flex-end"
        }}
      >
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.newAccount}>Password Reset</Text>
            <InputField
              value={this.state.email}
              onChangeText={text => {
                this.setState({ email: text });
              }}
              placeholder="Email"
              secureTextEntry={false}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonView}>
          <BigButton title="Reset" onPress={this.onResetPasswordPress} />
        </View>
        <BackButton
          source={require("../../assets/images/back_button.png")}
          onPress={this.goBack}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "flex-end",
    alignItems: "center"
  },
  newAccount: {
    fontSize: 24,
    color: colors.default.buttonWhite,
    alignContent: "center",
    fontFamily: "oxygen",
    marginBottom: 20
  },
  buttonView: {
    //this is view for button only to prevent breacking the main view when keyboard pop
    alignItems: "center",
    alignContent: "center",
    marginBottom: 150
  }
});
