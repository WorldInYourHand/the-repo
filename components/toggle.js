import * as React from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

export const RememberMeToggle = props => {
  const {
    title = "Remember me",
    style = {},
    textStyle = {},
    value = {}
  } = props;

  return (
    <View style={[styles.toggleView, style]}>
      <Switch value={value} onValueChange />
      <Text textStyle={[styles.rememberMeText, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "flex-start",
    paddingLeft: "12.5%",
    marginLeft: 17,
    marginBottom: 20
  },
  rememberMeText: {
    fontSize: 20,
    marginLeft: 10,
    color: "white"
  }
});
