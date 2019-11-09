import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

// lets declare all custom buttons here in order to reuse them after

export const CustomButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const RoundButton = (props) => {
    
    const { style = {}, onPress, source=this.state } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
          style={[styles.round, style]}
          source={source}
        />
        </TouchableOpacity>
    )
}

export const LinkButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.linkButton, style]}>
            <Text style={[styles.linkButtonText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
}



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
        backgroundColor: 'white',
        shadowColor: '#c5c7c5',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
    text: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: 'gray',
    },
    round: {
        width: 80,
        height:80,
        borderRadius:40
    },
    linkButton: {

    },
    linkButtonText: {
        color: "white",
        fontSize: 20
    }

});