import React, {Component} from 'react';
import{StyleSheet, View, TextInput,TouchableOpacity,Text,AsyncStorage} from 'react-native';
import {StackNavigator} from "react-navigation";
import { Application } from '../../../App';



export default class LoginForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    };



    render(){
       // const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                
                <TextInput
                placeholder="Username or Email"
                placeholderTextColor="rgba(255,255,255,1)"
                returnKeyType="next"
                onSubmitEditing={()=> this.passwordInput.focus()}
                keyboardType="email-address"
                autoCorrect = {false}
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(username) => this.setState({username})}
                />
                 <TextInput
                 placeholder = "Password"
                 placeholderTextColor="rgba(255,255,255,1)"
                 returnKeyType= "go"
                 secureTextEntry={true}
                style={styles.input}
                ref={(input)=> this.passwordInput = input}
                onChangeText={(password) => this.setState({password})}
                />
                <View style = {styles.rowContainer}>
                <TouchableOpacity style ={styles.buttonContainer}
                                   // onPress = {this.login}>
                                   onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style ={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.buttonContainer2}
                                   onPress={() => this.props.Application.navigate('Register')}>
                    <Text style ={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    </View>


            </View>
        );
    }

    login = () => {
        //alert(this.state.password);

         fetch('http://127.0.0.1/capstone/Login.php'),{
             method: 'POST',
             headers:{
                 'Accept' : 'application/json',
                 'Content-Type': 'application/json',
             },

             body: JSON.stringify({
                 username: this.state.username,
                 password: this.state.password,
            })
        }

        .then((response) => response.json())
        .then((res) => {
            alert(res.message);

            if(res.success == true){
                AsyncStorage.setItem('user',res.user);
                //this.props.navigation.navigate('Profile');
            }

            else{
                alert('Wrong Username or Password!');
            }
        })
        .done();
      }
}

const styles = StyleSheet.create({
    container:{

    },
    input:{
        height: 50,
        backgroundColor: 'rgba(0,0,0,.3)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10,
        margin: 20,
        borderRadius: 10



    },

    buttonContainer:{
        backgroundColor: 'rgba(0,0,0,.5)',
        paddingVertical: 15,
        paddingHorizontal:60,
        margin: 10,
        marginLeft: 20,
        marginRight:60,
        borderRadius:10,
        top: 0
    },
    buttonContainer2:{
        backgroundColor: 'rgba(0,0,0,.5)',
        paddingVertical: 15,
        paddingHorizontal: 50,
        margin: 10,
        marginLeft:0 ,
        marginRight:0,
        borderRadius: 10,
        top: 0
    },

    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'700'
    },

    rowContainer:{
        flexDirection: 'row'
    }

});