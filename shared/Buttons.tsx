import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

// lets declare all custom buttons here in order to reuse them after

export const CustomButton = (props) => {
    const { style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const RoundButton = (props) => {
    const fb = require("../assets/fb.png");
    const google = require("../assets/google.png");
    const twitter = require("../assets/twitter.png");
    const imagesArray = [fb, google, twitter]
    this.state = imagesArray

    const { style = {}, onPress, source=this.state } = props;
    return (

        <TouchableOpacity onPress={onPress} style={[styles.roundButton, style]}>
            <Image  style={[styles.roundButton, style]} source={source}/>
        </TouchableOpacity>
        )
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,

        backgroundColor: '#edd8d8',
        shadowColor: '#c5c7c5',
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    text: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: 'black',
    },
    roundButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 10
    }
});