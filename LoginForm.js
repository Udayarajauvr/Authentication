import React , {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import Button from './common/Button';
import Card  from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Spinner from './common/Spinner';
import firebase from 'firebase';

class LoginForm extends Component{

    state = {email : '', password : '', error : '', loading : false};


    onButtonPress() {
         const {email ,password} = this.state;

         this.setState ({error : '', loading : true});

        firebase.auth().signInWithEmailAndPassword(email , password ).then(this.onLoginSuccess.bind(this))
        .catch (() => {
            firebase.auth().createUserWithEmailAndPassword(email , password).then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }


    onLoginFail() {
        this.setState ({error : 'Authentication Failed' , loading : false});
    }

    onLoginSuccess() {
        this.setState ({email : '' , password : '' , error :'' , loading : false});
    }

    

    renderButton () {
        if( this.state.loading) {
           return <Spinner size = "small" />
        }
        return (
            <Button onPress = { this.onButtonPress.bind(this)}>
            Log in
            </Button>
        );
    }

    render()
    {
        return (
            <Card>
                <CardSection>
                    <Input
                    label = "Email"
                    placeholder = "user@gmail.com"
                    value = {this.state.email}
                    onChangeText = {email => this.setState({ email })} />
                     </CardSection>
                <CardSection>
                <Input
                    secureTextEntry
                    label = "Password"
                    placeholder = "password"
                    value = {this.state.password}
                    onChangeText = {password => this.setState({ password })} />
                </CardSection>
                    
                    <Text style = {styles.errorStyle}> 
                        {this.state.error}
                    </Text>
                <CardSection>
                   {this.renderButton()}
                </CardSection>

            </Card>
        );
    }

}


const styles = StyleSheet.create({
 errorStyle : {
     fontSize : 18,
     color : 'red',
     alignSelf : 'center'
 }
});
export default LoginForm;