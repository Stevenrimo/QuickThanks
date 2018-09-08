import React from 'react';
import {TabNavigator } from 'react-navigation';

import Login from './src/Compenents/login/login';
import ProfileScreen from './src/Compenents/ProfileScreen'; 

export const Tabs = TabNavigator({
    Login:{
        screen: Login,
    },

    ProfileScreen:{
        screen: ProfileScreen,
    },
});