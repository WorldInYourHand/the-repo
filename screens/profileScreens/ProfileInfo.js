import React from "react";
import { View, Text } from "react-native";
import { BigButton } from "../../components/buttons";
import * as firebase from "firebase";

export default class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profilePicture: ""
    };
  }

  getUser = () => {
    firebase
      .database()
      .ref("/usersList/" + firebase.auth().currentUser.uid)
      .once("value", snapshot => {
        if (snapshot.exists()) {
          this.setState({ username: snapshot.val().userName });
        } else {
          console.log("nab");
        }
      });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{this.state.username}</Text>
        <BigButton title="getUser" onPress={this.getUser} />
        <BigButton
          title="Change Email"
          onPress={() => this.props.navigation.navigate("ChangeEmail")}
        />
        <BigButton
          title="Change Password"
          onPress={() => this.props.navigation.navigate("ChangePassword")}
        />
      </View>
    );
  }
}
