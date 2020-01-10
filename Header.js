import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = (props) => {
    return(
           <View style = {styles.viewStyle}>
               <Text style = {styles.textStyle}>
                 {props.headerText}
               </Text>
           </View>
       );
         
};
const styles = StyleSheet.create({
    viewStyle : {
        backgroundColor : 'rgb(125,192,192)',
        justifyContent : "center",
        alignItems: "center",
        height : 60,
        paddingTop: 5, 
        shadowColor : '#000',
        shadowOffset: {width : 5 , height:2},
        shadowOpacity : 0.2,
        elevation : 1,
        position :"relative",
        marginBottom: 20

    },

    textStyle: {
        fontSize : 40,      
    }
});

export default Header;