import React, {Component} from 'react';
import{StyleSheet, View, TextInput,TouchableOpacity,Text,AsyncStorage,Image, KeyboardAvoidingView} from 'react-native';



export default class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            username:'',
            Address:'',
            email: '',
            password:'',
            confirmPassword:'',
        }
    };


  
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
            <View style={styles.container}>
            
           
            <Text style={styles.textstyle}>
            Registration
            </Text>
            
            
            
            <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255,255,255,1)"
                returnKeyType="next"
                onSubmitEditing={()=> this.passwordInput.focus()}
                autoCorrect = {false}
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(username) => this.setState({username})}
                /><TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,1)"
                returnKeyType="next"
                onSubmitEditing={()=> this.cPasswordInput.focus()}
                autoCorrect = {false}
                autoCapitalize="none"
                style={styles.input}
                ref={(input)=> this.passwordInput = input}
                onChangeText={(password) => this.setState({password})}
                /><TextInput
                placeholder="Confirm Password"
                placeholderTextColor="rgba(255,255,255,1)"
                returnKeyType="next"
                onSubmitEditing={()=> this.firstNameInput.focus()}
                autoCorrect = {false}
                autoCapitalize="none"
                style={styles.input}
                ref={(input)=> this.cPasswordInput = input}
                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                />
                <TextInput
                placeholder="First Name"
                placeholderTextColor="rgba(255,255,255,1)"
                returnKeyType="next"
                onSubmitEditing={()=> this.lastNameInput.focus()}
                ref={(input)=> this.firstNameInput = input}
                autoCorrect = {false}
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(FirstName) => this.setState({FirstName})}
                />
                 <TextInput
                placeholder="Last Name"
                placeholderTextColor="rgba(255,255,255,1)"
                returnKeyType="next"
                onSubmitEditing={()=> this.addressInput.focus()}
                ref={(input)=> this.lastNameInput = input}
                //keyboardType="email-address"
                autoCorrect = {false}
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(LastName) => this.setState({LastName})}
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
                username: this.state.username,
                password: this.state.password,
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                email: this.state.email,
                address: this.state.address
            })
        }  

        .then((response) => response.json())
        .then((res) => {
            alert(res.message);

            if(res.success == true){
                AsyncStorage.setItem('user',res.user);
                this.props.navigation.navigate('Login');
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
        marginLeft: 20,
        marginRight:20,
        borderRadius: 10
        
        

    },
    textstyle:{
        flex:1,
        fontSize: 40,
        top:100,
       
        color: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
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
        marginLeft: 20,
        marginRight:20,
        marginBottom:20,
        borderRadius:10
    },

    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'700'
    }

});