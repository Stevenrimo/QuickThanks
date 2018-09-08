import React, {Component} from 'react';
import{StyleSheet, View, TextInput,TouchableOpacity,Text,AsyncStorage,Image, KeyboardAvoidingView} from 'react-native';



export default class CreateThankyou extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            Note: '',
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
            Create Thank you Cards
            </Text>
            
            
            </View>
                <TextInput
                placeholder="Add personal Message Here"
                placeholderTextColor="rgba(255,255,255,1)"
                returnKeyType="go"
                multiLine = {true}
                numberOfLines = {20}
                maxLength = {40}
               // onSubmitEditing={()=> this.addressInput.focus()}
                //keyboardType="email-address"
                autoCorrect = {true}
                style={styles.input}
                onChangeText={(SessionName) => this.setState({SessionName})}
                />
               
                <TouchableOpacity style ={styles.buttonContainer}
                                    onPress = {this.save}>
                    <Text style ={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        );
    }

    save = () => {
        alert(this.state.SessionName);

        /*fetch('http://127.0.0.1/capstone/users'),{
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
                this.props.navigation.navigate('Profile');
            }

            else{
                alert(res.message);
            }
        })
        .done();*/
      }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#3498db'

    },
    input:{
        height: 200,
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