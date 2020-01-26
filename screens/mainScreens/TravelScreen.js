import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import Polyline from '@mapbox/polyline';

import Marker from 'react-native-maps';

const locations = require('../../constants/testLocation.json');
const { width, height } = Dimensions.get('screen');

const customMapStyles = require('../../constants/mapStyle.json');

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
    // previously we called here in the setState, mergeCoords
    // and also on the lower setState, because this helped us to
    // start the view with an initially drawn polyline between
    // coordinates
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({latitude,longitude}),
      (error) => console.log('Error:', error)
    )

    const { locations: [ sampleLocation ] } = this.state;

    this.setState({
      desLatitude: sampleLocation.coords.latitude,
      desLongitude: sampleLocation.coords.longitude
    });
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
      const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=AIzaSyDhwl_qaDcld4XVhetdWbDYfLVyJ_EOb4w`);
      //parse the request
      const respJson = await resp.json();
     // console.log(respJson);

     //get the response from which we are going to extract
     //the time and distance between routes
     const response = respJson.routes[0];
     const distanceTime = response.legs[0];
     const distance = distanceTime.distance.text;
     const time = distanceTime.duration.text;

      const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      const coords = points.map(point => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      //after we have gathered all the data, we set the state
      //for the coordinates and distance and time
      this.setState({ coords, distance, time })
    } catch(error) {
      console.log('Error from getting directions..', respJson.routes[0]);
    }
  }

  onMarkerPress = location => () => {
    // when the user presses on the marker, we update the route to the marker
    //this is so, because if we have multiple markers (because there are multiple
    //meaningfull locations around the user, then the trace between the locations
    //should update, based on which marker the user clicked on)
    const { coords: { latitude, longitude } } = location;
    this.setState({
      destination: location,
      desLatitude: latitude,
      desLongitude: longitude,
    }, this.mergeCoords);
  }

  renderMarkers = () => {
    const { locations } = this.state;
    return (
      <View>
        {
          locations.map((location, idx) => {
            const {
              coords: { latitude, longitude }
            } = location; 
            return (
              <MapView.Marker 
              key={idx}
              coordinate={{ latitude, longitude }}
              onPress={this.onMarkerPress(location)}
              />
            )
          })
        }
      </View>
    )
  }

  render() {
    const { 
      latitude,
      longitude, 
      coords, 
      destination,
      time,
      distance 
    } = this.state;

    // this is the view where we draw the polyline between 
    // the destination and us, if we have a destination
    if (latitude && coords) {
      return (
        <View>
        <MapView
        showsUserLocation
        style = { styles.map }
        customMapStyle = { customMapStyles }
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        >
          
          {this.renderMarkers()}
          <MapView.Polyline 
          strokeWidth={2}
          strokeColor="blue"
          coordinates={coords}
          />

        </MapView>
        <View
          style={styles.mapWithEstimatedTime}
          >
            <Text style = {{ fontWeight: 'bold' }}>
              Estimated Arrival Time: {time}
            </Text>
            <Text style = {{ fontWeight: 'bold' }}>
              Estimated Distance: {distance}
            </Text>
          </View>

        </View>
       );
    }
    // this is the view that we draw if we only have our
    // coordinates and not the destination ones
     else if (latitude && longitude || coords == 'undefined') {
      return (
        <View>
        <MapView
        showsUserLocation
        style = { styles.map }
        customMapStyle = { customMapStyles }
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        >
          {this.renderMarkers()}

        </MapView>
        </View>
       );

    }

    //this return here actually represents the loading screen
    //before the latitude and longitude of the user have been received
    return (
      <View style={styles.awaitingPermissionsView}>
        
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
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: height,
    width: width,
  },
  mapWithEstimatedTime: {
    position: 'absolute',
    width,
    paddingTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    height: height * 0.18,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  awaitingPermissionsView: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
});