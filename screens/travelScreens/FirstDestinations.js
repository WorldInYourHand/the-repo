import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const { width, height } = Dimensions.get('screen');

export default class FirstDestinations extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View  style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center', alignContent: 'center', paddingBottom: 50, paddingTop: 5}}>
                    Start arranging your trip !
                </Text>

                <GooglePlacesAutocomplete
                placeholder="Starting point"
                mingLength={2} //minimum length of text to be searched
                autoFocus={false}
                fetchDetails={true}
                onPress={(data, details=null) => { // 'details' is provided when fetchDetails=true
                    console.log(data);
                    console.log(details);
                    this.props.parentReference(details);
                }}
                currentLocation={true}
                currentLocationLabel="Current location"
                query={{
                    key: 'AIzaSyDhwl_qaDcld4XVhetdWbDYfLVyJ_EOb4w',
                    language: 'en', // language of the results
                    types: '(cities)', // default is geocode
                }}
                styles={{
                    description: {
                        fontWeight: 'bold'
                    },
                    predefinedPlacesDescription: {
                        color: 'red'
                    },
                    textInput: {
                        height: 38,
                    },
                    textInputContainer: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderTopWidth: 0,
                        borderBottomWidth:0,
                        width: width,
                        paddingBottom: 10
                      },
                }}
                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                predefinedPlacesAlwaysVisible={true}
               />

<GooglePlacesAutocomplete
                placeholder="End point"
                mingLength={2} 
                autoFocus={false}
                fetchDetails={true}
                onPress={(data, details=null) => { 
                    console.log(data);
                    console.log(details);
                }}
                query={{
                    key: 'AIzaSyDhwl_qaDcld4XVhetdWbDYfLVyJ_EOb4w',
                    language: 'en', 
                    types: '(cities)', 
                }}
                styles={{
                    description: {
                        fontWeight: 'bold'
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb'
                    },
                    textInput: {
                        height: 38
                    },
                    textInputContainer: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderTopWidth: 0,
                        borderBottomWidth:0,
                        width: width,
                      },
                }}
                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                predefinedPlacesAlwaysVisible={true}
               />

               <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center', alignContent: 'center', paddingTop: 25, marginBottom: 25}}>Continue</Text>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
  });