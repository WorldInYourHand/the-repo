import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export const BigButton = props => {
  const { title = "Login", style = {}, textStyle = {}, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.bigButton, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SocialButton = props => {
  const { style = {}, onPress = {}, source = {} } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={[styles.socialButton, style]} source={source} />
    </TouchableOpacity>
  );
};

export const LinkButton = props => {
  const { title = "link text", textStyle = {}, onPress = {} } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.linkButton, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bigButton: {
    display: "flex",
    width: "75%",
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "white"
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#4a4a4a"
  },
  socialButton: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  linkButton: {
    color: "white",
    fontSize: 20
  }
});
