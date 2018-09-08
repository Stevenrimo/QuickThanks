import React, {Component} from 'react';
import {StackNavigator} from "react-navigation";
import{AppRegistry} from 'react-native';
import Login from './src/Compenents/login/login';
import Profile from './src/Compenents/Profile';
import SignInScreen from './src/Compenents/SignInScreen';
import NewSession from './src/Compenents/NewSession';
import Register from './src/Compenents/Register';
import Opensession from './src/Compenents/OpenSession';
import CreateThankyou from './src/Compenents/CreateThankyou';


export const Application = StackNavigator({
  Home: {screen : Login},
  Profile:{screen: Profile},
  SignInScreen: {screen: SignInScreen},
  Register:{screen: Register},
  NewSession:{screen: NewSession},
  Opensession:{screen: Opensession},
  CreateThankyou:{screen: CreateThankyou},
},{
  navigationOptions: {
    header: false,
   
  }
});


export default class capstone extends Component{
   /* static navigationOptions = {
      title: 'Quick Thanks',
      headerStyle: {
        header: false,
      },
      headerTitleStyle: {
        color:'#000'
      }
    };*/
  render() {
    //const {navigate} = this.props.navigation;
    return (
      
     <SignInScreen />
    );
  }
};



AppRegistry.registerComponent('capstone', () => Application);