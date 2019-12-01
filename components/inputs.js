import * as React from "react";
import { TextInput, StyleSheet } from "react-native";
import * as colors from "../constants/Colors";

export const InputField = props => {
  const { style = {}, placeholder, secureTextEntry, onChangeText } = props;

  return (
    <TextInput
      {...this.props}
      onChangeText={onChangeText}
      editable={true}
      style={[styles.input, style]}
      maxLength={40}
      placeholder={placeholder}
      placeholderTextColor={colors.default.lightGray}
      secureTextEntry={secureTextEntry}
      underlineColorAndroid={"transparent"}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    width: "75%",
    textAlign: "left",
    alignSelf: "center",
    marginTop: 30,
    paddingLeft: 20,
    color: colors.default.lightBlue,
    fontSize: 20
  }
});
