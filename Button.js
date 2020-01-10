import React from 'react';
import {Text ,TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress,children}) => {
   const {buttonStyle , textStyle} = styles;
    return (
        <TouchableOpacity 
        onPress = {onPress}
        style = { buttonStyle}>
                 <Text style = {textStyle}>
                        {children}
                </Text>
        </TouchableOpacity>
       
    );
};
const styles = StyleSheet.create ({
    buttonStyle : {
        flex: 1,
        backgroundColor : "#fff",
        alignSelf : 'stretch',
        borderRadius : 2,
        borderWidth : 2,
        borderColor : "#007aff",
        marginLeft : 5, 
        marginRight : 5
    },
    textStyle : {
        alignSelf : 'center',
        fontWeight: 'bold',
        fontSize : 25 ,
        color : '#007aff',
        paddingTop : 10,
        paddingBottom : 10
    }


});

export default Button;
