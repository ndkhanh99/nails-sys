import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//! imp theme
import theme from '../../themes/Light';

//! imp screens
import HomeScreen from '../../screens/HomeScreen';
import AboutScreen from '../../screens/AboutScreen';

//! imp buttons
import { ButtonCreate } from '../../components/Button';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="StackHome" component={HomeScreen} options={{ headerLeft: (props) => null }} />
            <Stack.Screen name="StackAbout" component={AboutScreen} />
        </Stack.Navigator>
    );
};

// const screenOptionStyle = StyleSheet.create({
//     headerStyle: {
//         backgroundColor: '#9AC4F8',
//     },
//     headerTintColor: 'white',
//     headerBackTitle: 'Back',
// });

export default HomeStackNavigator;

