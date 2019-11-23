import React from "react";
import { ScrollView, StyleSheet, Button, Text } from "react-native";
import * as firebase from "firebase";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Occurs when signout is pressed...
  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          flexDirection: "column",
          paddingVertical: 50,
          paddingHorizontal: 10
        }}
      >
        <Text>HOME SCREEN</Text>
        <Text>logged as {firebase.auth().currentUser.email}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 20,
    padding: 10,
    height: 40,
    alignSelf: "stretch",
    fontSize: 18
  }
});
