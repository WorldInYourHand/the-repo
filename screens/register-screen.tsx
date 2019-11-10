import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { CustomButton } from "./../components/Buttons";
import { InputField } from "../components/InputFields";

export default class Register extends React.Component {
  render() {
    const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

    return (
      <ImageBackground
        source={require("./../assets/Photo_blurred.png")}
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
          <CustomButton
            title="Sign Up"
            onPress={() => console.log(`sasdasd`)}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  registerView: {},
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
    fontSize: 20,
    color: "white",
    alignContent: "center",
    fontFamily: "oxygen",
    marginBottom: 20
  },
  buttonView: {
    //this is view for button only to prevent breacking the main view when keyboard pop
    alignItems: "center",
    alignContent: "center",
    marginBottom: 100
  }
});
