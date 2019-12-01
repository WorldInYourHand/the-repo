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

  loadName() {
    firebase
      .database()
      .ref("users")
      .on("value", data => {
        console.log(data.toJSON());
      });
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
        <Text>Profile Info</Text>
        <BigButton title="view info" onPress={this.loadName} />
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
