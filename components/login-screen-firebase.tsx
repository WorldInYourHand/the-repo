import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CustomButton, RoundButton } from '../shared/Buttons';
import { UselessTextInput } from '../shared/InputFields'


export default class LogInOne extends React.Component {

render() {
  return (
    <View style ={styles.login}>
      {/* login with acc */}
      <View style = {styles.loginWithAcc}>
      <Text style = {styles.login}> LOGIN</Text>
      <UselessTextInput value={'Username'} />
      <UselessTextInput value={'Password'} />
      <CustomButton title='LOGIN' style={styles.loginButtons} onPress={() => console.log('iAA')}/>
      </View>

      {/* login with media */}
      <Text style={styles.cleanText}> Login with your comunity account:</Text>

      <View style={styles.loginWithSocial}>
      <RoundButton   onPress={() => console.log('FB')} source={require("../assets/fb.png")}/>
      <RoundButton  onPress={() => console.log('google')} source={require("../assets/google.png")}/>
      <RoundButton  onPress={() => console.log('twitter')} source={require("../assets/twitter.png")}/>
      </View>
      {/* register */}
      <View style = {styles.loginWithAcc}>
      <Text style = {styles.cleanText}> Still don't have account in our app???</Text>
      <CustomButton title='Register' style={styles.register}  onPress={() => console.log('reg')}/>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold'

  },
  line: {
    borderTopWidth: 1,
    borderColor: 'black',
    width: 320,
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 20,
  },
  loginButtons: {
    width: 200,
    height: 30,
    backgroundColor: "white",
    marginVertical: 5,
  },
  cleanText: {
    color: 'black',
    marginVertical: 20
  },
  register: {
    width: 200,
    height: 30,
    backgroundColor: "white",
    marginBottom: 40
  },
  loginWithSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginWithAcc: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  }
});