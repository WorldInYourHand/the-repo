import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { CustomButton , RoundButton ,LinkButton } from '../components/Buttons';

export default function LogInOne() {

  return (
      <ImageBackground source={require('../assets/images/Photo_blurred.png')} style={styles.login}>
      <Text style = {styles.line}> Sign in with</Text>
      <View style = {styles.rowView}>
      <RoundButton source = {require("../assets/images/Facebook_button.png")} onPress={() => console.log('FB')}/>
      <RoundButton source = {require("../assets/images/Twiter_button.png")} onPress={() => console.log('twit')}/>
      <RoundButton source = {require("../assets/images/Google_Button.png")} onPress={() => console.log('google')}/>
      </View>
      <Text style = {styles.line}> or</Text>
      <CustomButton title='LOGIN' onPress={() => console.log('iAA')}/>
      <LinkButton title='create an account' style={styles.linkButton} onPress={() => console.log('Register')}/>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'oxygen'    
  },
  line: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 60,
    fontFamily: 'oxygen'   
  },
  rowView: {
    flexDirection: "row"
  },
  linkButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    color: "white",
    fontFamily: 'oxygen'   
  }
});