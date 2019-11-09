import React, {Component} from 'react';
import { TextInput, StyleSheet, View, Text, ImageBackground } from 'react-native';
import {CustomButton} from './../components/registerButton';

export default function Register() {
  return(
    <ImageBackground source={require('./../assets/Photo_blurred.png')} style={{flex: 1, position: 'relative',width: '100%', height: '100%'}}>
    <Text style={styles.newAccount}>New Account</Text>
      <View style={styles.inputContainer}>
        <InputField style={{marginTop: 120}}/>
        <EmailField />
        <PasswordField />
        <RepeatPasswordField />
        <CustomButton title="Sign Up"
        onPress={() => console.log(`sasdasd`)}
        style={styles.button}
        textStyle={{ /* styles for button title */ }}/>
      </View>
    </ImageBackground>
  )
}
export const InputField = (props) => {
    const { style = {}, value ={} } = props;

    return (
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable = {true}
          style={[styles.input, style]}
          maxLength = {15}
          placeholder="Username"
        />
      );
}

export const PasswordField = (props) => {
    const { style = {}, value ={} } = props;
    
    return (
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable = {true}
          style={[styles.input, style]}
          maxLength = {15}
          placeholder="Password"
          secureTextEntry={true}
        />
      );
}

export const RepeatPasswordField = (props) => {
    const { style = {}, value ={} } = props;

    return (
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable = {true}
          style={[styles.input, style]}
          maxLength = {15}
          placeholder="Repeat Password"
          secureTextEntry={true}
        />
      );
}

export const EmailField = (props) => {
    const { style = {}, value ={} } = props;

    return (
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable = {true}
          style={[styles.input, style]}
          maxLength = {15}
          placeholder="E-mail"
        />
      );
}



const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 2,
        width: '75%',
        textAlign:'left',
        alignSelf: 'center',
        marginTop: 30,
        paddingLeft: 20,
        color: 'white',
        //Should check how to calculate font size based on phone !!
        fontSize: 16
    },
    inputContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newAccount: {
        fontSize: 25,
        color: 'white',
        position: 'absolute',
        top: '30%',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    button: {
        position: 'absolute',
        bottom: "13.5%",
    }
})