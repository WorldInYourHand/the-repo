import React from "react";
import { ScrollView, StyleSheet, Button, Text, View } from "react-native";
import * as firebase from "firebase";
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
      latitude: null,
      longitude: null,
      errorMessage: null,
      location: {},
    };
  }

  componentWillMount() {
    this._getLocation();
  }

  _getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission not granted..'
      })
    }
    const userLocation = await Location.getCurrentPositionAsync();
    
    this.setState({
      location: userLocation
    })
  }

  // Occurs when signout is pressed...
  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    const latitude = 42.6473941;
    const longitude = 23.4082251;
    return (
      <MapView
      style = {styles.map}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      >
      </MapView>
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
  },
  map: {
    flex: 1,
  }
});
