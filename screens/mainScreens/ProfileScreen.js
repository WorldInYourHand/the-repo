import React from "react";
import { ScrollView, StyleSheet, View, Button, Text } from "react-native";
import ProvileNavigator from "../../navigation/profileNavigation";
import * as firebase from "firebase";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: ""
    };
  }

  // Occurs when signout is pressed...
  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 80 }}>
        <ProvileNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 13
  }
});
