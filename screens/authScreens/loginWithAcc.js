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
import * as colors from "../../constants/Colors";

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
        source={require("../../assets/images/home_screen.png")}
        style={styles.screenView}
      >
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={{ flex: 3, justifyContent: "flex-end" }}
        >
          <Text style={styles.newAccount}>Sign In</Text>
          <View style={styles.inputContainer}>
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
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonView}>
          <BigButton title="Sign In" onPress={this.onLoginPress} />
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
    resizeMode: "contain",
    justifyContent: "flex-end"
  },
  inputContainer: {
    justifyContent: "space-around",
    alignItems: "center"
  },
  newAccount: {
    fontSize: 24,
    alignSelf: "center",
    color: colors.default.buttonWhite,
    alignContent: "center",
    fontFamily: "oxygen"
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center"
  }
});
