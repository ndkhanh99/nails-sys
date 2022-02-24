import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
//! themes -> useTheme
import theme from './themes/Light';
import { Provider } from 'react-redux';
import store from './redux/store';

//! imp Navigation
import { AppNavigator } from './navigation';

//! imp Modals
import RootModal from './components/Modal'

// import Colors from './constants/color';
// import  from './components/globalStyles';

//! icons
// import IconAppointmentOutline from './assets/icons/IconAppointmentOutline';
// import IconHomeOutline from './assets/icons/IconHomeOutline';
// import IconManageOutline from './assets/icons/IconManageOutline';
// import IconServicesOutline from './assets/icons/IconServicesOutline';
// import IconSettingOutline from './assets/icons/IconSettingOutline';
// import IconSignoutOutline from './assets/icons/IconSignoutOutline';
// import IconTurnTrackingOutline from './assets/icons/IconTurnTrackingOutline';
// import IconExtensions from './assets/icons/IconExtensions';

//! comps
// import TabButton from './components/TabButton';
// import DrawerContent from './navigation/navigators/DrawerContent';

//! screens
// import AppointmentScreen from './screens/AppointmentScreen';
// import HomeScreen from './screens/HomeScreen';
// import ManageScreen from './screens/ManageScreen';
// import ServicesScreen from './screens/ServicesScreen';
// import SettingScreen from './screens/SettingScreen';
// import TurnTrackingScreen from './screens/TurnTrackingScreen';

export default function App() {

    const styles = {
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight,
            paddingBottom: StatusBar.currentHeight / 2,
            //! Barbottom
            backgroundColor: theme.colors.primary,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
        innerContainer: {
            justifyContent: 'flex-start',
            padding: 15,
        },
        avatar: {
            width: 60,
            height: 60,
            borderRadius: 10,
            // marginTop: 10,
        },
        username: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.colors.black,
        },
    };

    

    return (
        <SafeAreaView style={style.container}>
            <Provider store={store}>
                <AppNavigator />
                <RootModal />
            </Provider>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});
