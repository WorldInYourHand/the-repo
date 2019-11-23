import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Alert,
  View
} from "react-native";
import { InputField } from "../../components/inputs";
import { BigButton, LinkButton, BackButton } from "../../components/buttons";
import * as firebase from "firebase";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  goBack = () => {
    this.props.navigation.navigate("LoginWithSocial");
  };

  onSignUpPress = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {},
        error => {
          Alert.alert(error.message);
        }
      );
  };

  onReturnToLoginPress = () => {
    this.props.navigation.navigate("LoginWithAcc");
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
          <SafeAreaView style={styles.inputContainer}>
            <Text style={styles.newAccount}>New Account</Text>
            <InputField
              value={this.state.username}
              onChangeText={text => {
                this.setState({ username: text });
              }}
              placeholder="User Name"
              secureTextEntry={false}
            />
            <InputField
              value={this.state.email}
              onChangeText={text => {
                this.setState({ email: text });
              }}
              placeholder="Email"
              secureTextEntry={false}
            />
            <InputField
              value={this.state.password}
              onChangeText={text => {
                this.setState({ password: text });
              }}
              placeholder="Password"
              secureTextEntry={true}
            />
            <InputField
              value={this.state.passwordConfirm}
              onChangeText={text => {
                this.setState({ passwordConfirm: text });
              }}
              placeholder="Repeat password"
              secureTextEntry={true}
              style={{ marginBottom: 20 }}
            />
            <BigButton title="Sign Up" onPress={this.onSignUpPress} />
          </SafeAreaView>
        </KeyboardAvoidingView>
        <View style={styles.buttonView}>
          <LinkButton
            title="I have an account"
            onPress={this.onReturnToLoginPress}
          />
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
    color: "white",
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
