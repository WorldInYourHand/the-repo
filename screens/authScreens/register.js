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
import * as colors from "../../constants/Colors";

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
    if (this.state.username === "") {
      Alert.alert("You need an username");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          firebase
            .database()
            .ref("usersList/" + firebase.auth().currentUser.uid)
            .set({
              userName: this.state.username,
              userEmail: this.state.email
            });
        },
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
        source={require("../../assets/images/home_screen.png")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={styles.keyboardAvoidingViewStyle}
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
          </SafeAreaView>
        </KeyboardAvoidingView>
        <View style={styles.buttonView}>
          <BigButton title="Sign Up" onPress={this.onSignUpPress} />
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
    color: colors.default.buttonWhite,
    alignContent: "center",
    fontFamily: "oxygen"
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end"
  },
  keyboardAvoidingViewStyle: {
    flex: 3, 
    justifyContent: "flex-end"
  }
});
