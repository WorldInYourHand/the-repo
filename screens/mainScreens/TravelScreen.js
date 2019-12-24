import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import Polyline from '@mapbox/polyline';

const locations = require('../../constants/testLocation.json');


export default class TravelScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: null,
      longitude: null,
      locations: locations
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({latitude,longitude}, this.mergeCoords),
      (error) => console.log('Error:', error)
    )

    const { locations: [ sampleLocation ] } = this.state;

    this.setState({
      desLatitude: sampleLocation.coords.latitude,
      desLongitude: sampleLocation.coords.longitude
    }, this.mergeCoords);

  }


  mergeCoords = () => {
    const {
      latitude,
      longitude,
      desLatitude,
      desLongitude
    } = this.state;

    const hasStartAndEnd = latitude !== null && desLatitude !== null

    if (hasStartAndEnd) {
      const concatStart = `${latitude}, ${longitude}`;
      const concatEnd = `${desLatitude}, ${desLongitude}`;
      this.getDirections(concatStart, concatEnd);
    }
  }

 async getDirections(startLoc, desLoc) {
    try {
      //make a request to google's api 
      const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=`);
      //parse the request
      const respJson = await resp.json();
      console.log(respJson);
      const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      const coords = points.map(point => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords })
    } catch(error) {
      console.log('Error from getting directions..', respJson.routes[0]);
    }
  }

  render() {
    const { latitude, longitude, coords } = this.state;


    if (latitude) {
      return (
        <MapView
        showsUserLocation
        style = {{ flex: 1}}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        >
          <MapView.Polyline 
          strokeWidth={2}
          strokeColor="red"
          coordinates={coords}
          />
   
        </MapView>
       );
    }

    //this return here actually represents the loading screen
    //before the latitude and longitude of the user have been received
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Text>Waiting to receive permissions for the map...</Text>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 85,
  },
});