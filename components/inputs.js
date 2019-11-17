import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

export const InputField = props => {
  const { style = {}, placeholder, secureTextEntry, onChangeText } = props;

  return (
    <TextInput
      {...this.props}
      onChangeText={onChangeText}
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
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 2,
    width: "75%",
    textAlign: "left",
    alignSelf: "center",
    marginTop: 30,
    paddingLeft: 20,
    color: "white",
    fontSize: 20
  }
});
