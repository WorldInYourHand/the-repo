import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

// lets declare all custom buttons here in order to reuse them after

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
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderColor: '#949494',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,

        backgroundColor: '#edd8d8',
        shadowColor: '#c5c7c5',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    text: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#949494',
    },
});