import React from "react";
import { ScrollView, StyleSheet, Button, Text, View } from "react-native";
import * as firebase from "firebase";
import { BackButton } from "../../components/buttons";
import * as colors from "../../constants/Colors";

export default class Home extends React.Component {
  constructor() {
    super();
    //Array of Item to add
    this.items = [
      "Goa",
      "Gujrat",
      "Madhya Pradesh",
      "Assam",
      "Gujrat",
      "Karnataka",
      "Jharkhand",
      "Himachal Pradesh",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Uttarakhand",
      "West Bengal",
      "Tamil Nadu ",
      "Punjab",
      "Rajasthan",
      "Bihar",
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Himachal Pradesh",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Uttarakhand",
      "West Bengal",
      "Tamil Nadu ",
      "Punjab",
      "Rajasthan",
      "Bihar",
      "Andhra Pradesh",
      "Arunachal Pradesh"
    ];
  }

  // Occurs when signout is pressed...
  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingTop: 85,
          paddingHorizontal: 10,
          backgroundColor: colors.default.lightGray
        }}
      >
        <Text style={styles.text}>HOME SCREEN</Text>
        <Text>logged as {firebase.auth().currentUser.email}</Text>
        <ScrollView>
          {/*Loop of JS which is like foreach loop*/}
          {this.items.map((item, key) => (
            //key is the index of the array
            //item is the single item of the array
            <View key={key} style={styles.item}>
              <Text style={styles.text}>
                {key}. {item}
              </Text>
              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
        <BackButton
          source={require("../../assets/images/back_button.png")}
          title="Sign out"
          onPress={this.onSignoutPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: colors.default.blue,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "oxygen"
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.default.darkGray,
    marginVertical: 20,
    padding: 10,
    height: 40,
    alignSelf: "stretch",
    fontSize: 18
  }
});
