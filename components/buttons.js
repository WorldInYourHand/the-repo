import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import * as colors from "../constants/Colors";

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

export const BackButton = props => {
  const { style = {}, onPress = {}, source = {} } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={[styles.backButton, style]} source={source} />
    </TouchableOpacity>
  );
};

export const ModalButton = props => {
  const { title = "OK", style = {}, textStyle = {}, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.bigButton, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
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
    backgroundColor: colors.default.buttonWhite
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    color: colors.default.darkGray
  },
  socialButton: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  linkButton: {
    color: colors.default.lightGray,
    fontSize: 20
  },
  cofirmButton: {
    backgroundColor: colors.default.blue,
    alignItems: "center",
    color: colors.default.buttonWhite,
    fontSize: 20
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 20
  }
});
