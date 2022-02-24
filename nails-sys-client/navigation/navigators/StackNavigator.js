import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//! imp theme
import theme from '../../themes/Light';

//! imp screens
import AppointmentScreen from '../../screens/AppointmentScreen';
import HomeScreen from '../../screens/HomeScreen';
import AboutScreen from '../../screens/AboutScreen';
import ManageScreen from '../../screens/ManageScreen';
import ServicesScreen from '../../screens/ServicesScreen';
import SettingScreen from '../../screens/SettingScreen';
import TurnTrackingScreen from '../../screens/TurnTrackingScreen';

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

const ServicesStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="StackServices"
                component={ServicesScreen}
                options={{
                    headerLeft: (props) => null,
                    // headerRight: () => <Button title="About" color={theme.colors.text1} onPress={() => navigation.navigate('StackAbout')} />,
                    headerRight: () => (
                        <View style={{marginRight: 5}}>
                            <ButtonCreate size={25} onPress={() => {}}/>
                        </View>
                    ),
                }}
            />
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

export { HomeStackNavigator, ServicesStackNavigator };
