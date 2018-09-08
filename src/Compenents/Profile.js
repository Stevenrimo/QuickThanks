import React, {Component} from 'react';
import {View,Text, StyleSheet, TouchableOpacity, Image, AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
//import capstone from '../../App';
//import Login from './src/Compenents/login/login';

export default class Profile extends Component{
    static navigationOptions ={
        title: 'Profile',
    };

    render(){
        return(
            <View style={styles.container}>
            <View style = {styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('../images/CapstoneLogo.png')}
            />
            <Text style={styles.textstyle}>
            Quick Thanks
            </Text>
            </View>
                <TouchableOpacity style ={styles.buttonContainer}
                                    onPress = {this.login}>
                    <Text style ={styles.buttonText}>New Thank You Session</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.buttonContainer3}
                                    //onPress = {this.login}>
                                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style ={styles.buttonText}>Open Existing Session</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.buttonContainer2}
                                    onPress = {this.login}>
                    <Text style ={styles.buttonText}>Create Thank You Cards</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

AppRegistry.registerComponent('capstone', () => Profile);

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

    },
    buttonContainer:{
        backgroundColor: 'rgba(0,0,0,.5)',
        paddingVertical: 15,
        margin: 20,
        borderRadius:10,
        alignItems: 'center',
        height: 50,
        marginTop:200,
        marginBottom:0

    },
    buttonContainer2:{
        backgroundColor: 'rgba(0,0,0,.5)',
        paddingVertical: 15,
        margin: 20,
        borderRadius:10,
        alignItems: 'center',
        height: 50,
        marginBottom: 50
    },

    buttonContainer3:{
        backgroundColor: 'rgba(0,0,0,.5)',
        paddingVertical: 15,
        margin: 20,
        borderRadius:10,
        alignItems: 'center',
        height: 50,
        marginBottom: 0
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'700'
    }
});


