import React from "react";
import { View, Text } from "react-native";
import { BigButton } from "../../components/buttons";
import * as firebase from "firebase";

export default class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: firebase
        .database()
        .ref("/usersList/" + firebase.auth().currentUser.uid)
        .on("value", snapshot => {
          if (snapshot.exists()) {
            this.setState({ userName: snapshot.val().userName });
          } else {
            this.setState({ userName: "Unnamed" });
          }
        })
    };
  }

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
        <Text>{this.state.userName}</Text>
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
