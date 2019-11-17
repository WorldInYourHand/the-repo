import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { InputField } from "../../components/inputs";
import { BigButton } from "../../components/buttons";

export default class Register extends React.Component {
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
            <Text style={styles.newAccount}>New Account</Text>
            <InputField placeholder="User Name" secureTextEntry={false} />
            <InputField placeholder="Email" secureTextEntry={false} />
            <InputField placeholder="Password" secureTextEntry={true} />
            <InputField
              placeholder="Repeat password"
              secureTextEntry={true}
              style={{ marginBottom: 20 }}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonView}>
          <BigButton title="Sign Up" onPress={() => console.log(`sasdasd`)} />
        </View>
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
