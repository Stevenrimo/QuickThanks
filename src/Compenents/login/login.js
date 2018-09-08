import React, {Component} from 'react';
import{AppRegistry, StyleSheet, View, Text, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
import {StackNavigator} from 'react-navigation';

export default class Login extends Component{

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
            
            <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('../../images/CapstoneLogo.png')}
            />
             <Text style = {styles.textstyle}> Welcome To Quick Thanks </Text>
             </View>
            <View style={styles.formContainer}>
            <LoginForm/>
            </View>
            </KeyboardAvoidingView>
        );
    }

 }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#3498db'
    },

    textstyle:{
        flex:1,
        fontSize: 20,
        top: 10,
        color: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center'
    },

    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        top:200
    },

    logo:{

        width:200,
        height: 133

    }
});
AppRegistry.registerComponent('Login', () => button);
//export default login;
