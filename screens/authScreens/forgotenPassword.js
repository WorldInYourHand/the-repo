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
        style={styles.imageContainer}
      >
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={{ flex: 3, justifyContent: "flex-end" }}
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
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
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
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
});
