import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";

// lets declare all custom buttons here in order to reuse them after

export const CustomButton = props => {
  const { title = "Enter", style = {}, textStyle = {}, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const RoundButton = props => {
  const { style = {}, onPress, source = this.state } = props;
  return (
    <TouchableOpacity onPress={() => this.props}>
      <Image style={[styles.round, style]} source={source} />
    </TouchableOpacity>
  );
};

export const LinkButton = props => {
  const { title = "Enter", style = {}, textStyle = {}, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.linkButton, style]}>
      <Text style={[styles.linkButtonText, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    width: 250,
    height: 46,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "white"
  },
  text: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#4a4a4a"
  },
  round: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  linkButton: {},
  linkButtonText: {
    color: "white",
    fontSize: 20
  }
});
