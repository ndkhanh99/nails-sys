import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//! navigation/navigators
import DrawerMenu from './DrawerMenu';

//! screens
// import AppointmentScreen from './screens/AppointmentScreen';
import HomeScreen from '../../screens/HomeScreen';
// import ManageScreen from './screens/ManageScreen';
import ServicesScreen from '../../screens/ServicesScreen';
// import SettingScreen from './screens/SettingScreen';
// import TurnTrackingScreen from './screens/TurnTrackingScreen';

const Stack = createStackNavigator();

const Stacks = () => {
    return (
        <Stack.Navigator

            initialRouteName="Home"

        >
            <Stack.Screen
                name="Home"
                component={DrawerMenu}
                // options={{
                //     headerShown: true,
                // }}
            />
            <Stack.Screen name="Services" component={ServicesScreen} />

        </Stack.Navigator>

    );
};

export default Stacks;
