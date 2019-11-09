import React from 'react';
import {  StyleSheet, Text, TouchableOpacity } from 'react-native';

export const CustomButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        width: 250,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#FFFFFF',
        shadowColor: '#3F422B',
        shadowOpacity: 0.8,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 25,
        elevation: 1,
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: 'black',
    },
});