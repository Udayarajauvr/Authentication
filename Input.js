import React from 'react';
import {View ,Text, TextInput, StyleSheet} from 'react-native';

const Input = ({label , value ,onChangeText, placeholder,secureTextEntry }) => 
{ 
    return (
        <View style ={styles.containerStyle}>
            <Text style = {styles.labelStyle}>
                {label}
            </Text>
            <TextInput
            secureTextEntry = {secureTextEntry}
            placeholder = {placeholder}
            autoCorrect = {false}
            style = {styles.textStyle}
            value = {value}
            onChangeText = {onChangeText}
           
            />
        </View>
    );

};

const styles = StyleSheet.create ({
    labelStyle : {
        flex : 1 ,
        fontSize : 18 ,
        paddingLeft : 20
    },
    textStyle : {
        color : "#000",
        fontSize : 18 ,
        paddingRight : 5,
        paddingLeft : 5,
        lineHeight : 20,
        height : 40,
        width : 100,
        flex : 2
    },
    containerStyle :{
        flex : 1,
        flexDirection : "row",
        alignItems : 'center'
    }
});

export default Input;