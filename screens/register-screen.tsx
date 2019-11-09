import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  ImageBackground
} from "react-native";
import { CustomButton } from "./../components/Buttons";
import { InputField } from "../components/InputFields";

export default class Register extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("./../assets/Photo_blurred.png")}
        style={{ flex: 1, position: "relative", width: "100%", height: "100%" }}
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
          <CustomButton
            title="Sign Up"
            onPress={() => console.log(`sasdasd`)}
            textStyle={
              {
                /* styles for button title */
              }
            }
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
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 2,
    width: "70%",
    textAlign: "left",
    alignSelf: "center",
    marginTop: 30,
    paddingLeft: 20,
    color: "white",
    //Should check how to calculate font size based on phone !!
    fontSize: 20
  },
  inputContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 100
  },
  newAccount: {
    fontSize: 20,
    color: "white",
    alignContent: "center",
    fontFamily: "oxygen",
    marginBottom: 20
  }
});
