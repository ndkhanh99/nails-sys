import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//! Drawer
import DrawerMenu from './DrawerMenu';


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <DrawerMenu />
        </NavigationContainer>
    );
};

export default AppNavigator;
