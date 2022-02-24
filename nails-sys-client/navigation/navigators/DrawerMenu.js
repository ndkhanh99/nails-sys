import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//! theme
import theme from '../../themes/Light';

//! navigation/navigators
import DrawerContent from './DrawerContent';
import HomeStackNavigator from './HomeStackNavigator';
import ServicesStackNavigator from './ServicesStackNavigator';

//! screens
import AppointmentScreen from '../../screens/AppointmentScreen';
import AboutScreen from '../../screens/AboutScreen';
import ManageScreen from '../../screens/ManageScreen';
import SettingScreen from '../../screens/SettingScreen';
import TurnTrackingScreen from '../../screens/TurnTrackingScreen';
import HomeScreen from '../../screens/HomeScreen';
import ServicesScreen from '../../screens/ServicesScreen';

const DrawerMenu = (props) => {
    const [activeIndex, setActiveIndex] = React.useState(1); //! 0 = Home
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

    const Drawer = createDrawerNavigator();

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
            <Drawer.Navigator
                hideStatusBar={true}
                defaultStatus="open"
                screenOptions={{
                    drawerStyle: {
                        width: isLargeScreen ? '35%' : '60%',
                        backgroundColor: theme.colors.boxBackground,
                    },
                    // overlayColor : 1 //! ???
                    // headerShown: false,
                    sceneContainerStyle: {
                        backgroundColor: 'transparent',
                    },
                    drawerType: isLargeScreen ? 'permanent' : 'front',
                    // drawerStyle: isLargeScreen ? null : { width: '60%' },
                    overlayColor: 'transparent',
                }}
                initialRouteName="Services"
                drawerContent={(props) => {
                    return (
                        <DrawerContent
                            navigation={props.navigation}
                            theme={theme}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            {...props}
                        />
                    );
                }}
            >
                <Drawer.Screen
                    name="Home"
                    // options={{
                    //     headerShown: false,
                    // }}
                >
                    {(props) => <HomeStackNavigator navigation={props.navigation} />}
                </Drawer.Screen>
                <Drawer.Screen
                    name="Services"
                    component={ServicesStackNavigator}
                    // options={{
                    //     headerShown: false,
                    // }}
                />
                <Drawer.Screen name="TurnTracking">{(props) => <TurnTrackingScreen {...props} />}</Drawer.Screen>
                <Drawer.Screen name="Appointment">{(props) => <AppointmentScreen {...props} />}</Drawer.Screen>
                <Drawer.Screen name="Manage">{(props) => <ManageScreen {...props} />}</Drawer.Screen>
                <Drawer.Screen name="Setting">{(props) => <SettingScreen {...props} />}</Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};

export default DrawerMenu;
