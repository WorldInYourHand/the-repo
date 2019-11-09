//imput text component
import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const UselessTextInput = (props) => {

    
    const { style = {}, value ={} } = props;

    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        style={[styles.field, style]}
        value={value}
        maxLength = {15}
      />
    );
  }

  const styles = StyleSheet.create({
      field: {
        width: 250,
        height:50,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: 'black',
        paddingHorizontal: 10,
        paddingLeft: 30,
        fontSize: 20,
        color: 'gray',
        marginBottom: 5
      }
  })
  