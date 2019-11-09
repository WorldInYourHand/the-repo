//imput text component
import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

export const InputField = props => {
  const { style = {}, placeholder, secureTextEntry } = props;

  return (
    <TextInput
      {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable={true}
      style={[styles.input, style]}
      maxLength={15}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
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
    fontSize: 16
  }
});
