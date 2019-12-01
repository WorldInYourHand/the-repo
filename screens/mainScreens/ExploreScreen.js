import React from "react";
import { ScrollView, StyleSheet, Button, Text } from "react-native";
import * as firebase from "firebase";

export default class Explore extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
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
        paddingVertical: 85,
        paddingHorizontal: 10
      }}
    >
      {/* <Button title="Sign out" onPress={this.onSignoutPress} /> */}
      <Text>Explore Screen</Text> 
      <Text>Logged as {firebase.auth().currentUser.email}</Text>
      <Text>{firebase.auth().currentUser.uid}</Text>
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