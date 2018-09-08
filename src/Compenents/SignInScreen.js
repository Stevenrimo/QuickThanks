import React, {Component} from 'react';
import{StyleSheet, View, TextInput,TouchableOpacity,Text,AsyncStorage,Image, KeyboardAvoidingView} from 'react-native';



export default class SignInScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            email: '',
        }
    };


  
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
            <View style={styles.container}>
             <View style = {styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('../images/CapstoneLogo.png')}
            />
            <Text style={styles.textstyle}>
            Quick Thanks Sign In
            </Text>
            
            
            </View>
                <TextInput
                placeholder="Name"
                placeholderTextColor="rgba(255,255,255,1)"
                returnKeyType="next"
                onSubmitEditing={()=> this.addressInput.focus()}
                autoCorrect = {false}
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(name) => this.setState({name})}
                />
                 <TextInput
                 placeholder = "Address"
                 placeholderTextColor="rgba(255,255,255,1)"
                 returnKeyType= "next"
                style={styles.input}
                ref={(input)=> this.addressInput = input}
                onSubmitEditing={()=> this.emailInput.focus()}
                onChangeText={(address) => this.setState({address})}
                /> 
                  <TextInput
                 placeholder = "Email"
                 placeholderTextColor="rgba(255,255,255,1)"
                 returnKeyType= "go"
                 keyboardType = "email-address"
                 autoCorrect = {false}
                 autoCapitalize = "none"
                style={styles.input}
                ref={(input)=> this.emailInput = input}
                onChangeText={(email) => this.setState({email})}
                /> 
                <TouchableOpacity style ={styles.buttonContainer}
                                    onPress = {this.finish}>
                    <Text style ={styles.buttonText}>Finish</Text>
                    </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        );
    }

    finish = () => {
        
        fetch('http://127.0.0.1/capstone/users'),{
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                name: this.state.name,
                address: this.state.address,
                email: this.state.email,
            })
        }  

        .then((response) => response.json())
        .then((res) => {
            alert(res.message);

            if(res.success == true){
                AsyncStorage.setItem('user',res.user);
                this.props.navigation.navigate('SignInScreen');
            }

            else{
                alert(res.message);
            }
        })
        .done();
      }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#3498db'

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
        top:150
    },

    logo:{

        width:200,
        height: 133

    },

    buttonContainer:{
        backgroundColor: 'rgba(0,0,0,.5)',
        paddingVertical: 15,
        margin: 20,
        borderRadius:10
    },

    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'700'
    }

});