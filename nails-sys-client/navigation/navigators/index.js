import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//! themes
import theme from '../../themes/Light';
//! Stack
// import Stack from './Stack';
//! Drawer
import DrawerMenu from './DrawerMenu';


const AppNavigator = () => {
    return (
        <NavigationContainer>
            {/* <Stack /> */}
            <DrawerMenu />
        </NavigationContainer>
    );
};

export default AppNavigator;
