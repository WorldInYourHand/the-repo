import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../shared/Buttons';

export default function LogInOne() {

  return (
    <View style ={styles.login}>
      <Text> Login with your comunity account:</Text>
      <CustomButton title='Facebook' onPress={() => console.log('FB')}/>
      <CustomButton title='Twitter' onPress={() => console.log('twit')}/>
      <CustomButton title='Google' onPress={() => console.log('google')}/>
      <Text style = {styles.line}> Or with your in app account</Text>
      <CustomButton title='InApp Account' onPress={() => console.log('iAA')}/>
      <Text style = {styles.line}> Still don't have account in our app???</Text>
      <CustomButton title='Register' onPress={() => console.log('reg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderTopWidth: 1,
    width: '80%',
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center'
  }
});