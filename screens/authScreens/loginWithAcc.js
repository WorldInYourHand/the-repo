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
import { BigButton, LinkButton, BackButton } from "../../components/buttons";
import { InputField } from "../../components/inputs";
import * as firebase from "firebase";

export default class LoginWithAcc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isModalVisible: false,
      modalText: "error"
    };
  }

  goBack = () => {
    this.props.navigation.navigate("LoginWithSocial");
  };

  onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {},
        error => {
          Alert.alert(error.message);
        }
      );
  };
  onForgotPassPress = () => {
    this.props.navigation.navigate("ResetPassword");
  };

  render() {
    const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
    return (
      <ImageBackground
        source={require("../../assets/images/photo_blurred.png")}
        style={styles.screenView}
      >
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.newAccount}>Sign In</Text>
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
              style={{ marginBottom: 20 }}
            />
            <BigButton title="Sign In" onPress={this.onLoginPress} />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonView}>
          <LinkButton
            title="Forgoten password?"
            onPress={this.onForgotPassPress}
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
  screenView: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    width: "70%",
    textAlign: "left",
    marginTop: 30,
    paddingLeft: 20,
    color: "white",
    //Should check how to calculate font size based on phone !!
    fontSize: 20
  },
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
    alignItems: "center",
    alignContent: "center",
    marginBottom: 150
  }
});
