import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Animated, { EasingNode } from 'react-native-reanimated';
//! constants
import Colors from './constants/color';
// import  from './components/globalStyles';

//! icons
import IconAppointmentOutline from './assets/icons/IconAppointmentOutline';
import IconHomeOutline from './assets/icons/IconHomeOutline';
import IconManageOutline from './assets/icons/IconManageOutline';
import IconServicesOutline from './assets/icons/IconServicesOutline';
import IconSettingOutline from './assets/icons/IconSettingOutline';
import IconSignoutOutline from './assets/icons/IconSignoutOutline';
import IconTurnTrackingOutline from './assets/icons/IconTurnTrackingOutline';
import IconExtensions from './assets/icons/IconExtensions';

//! comps
import TabButton from './components/TabButton';

//! screens
import AppointmentScreen from './screens/AppointmentScreen';
import HomeScreen from './screens/HomeScreen';
import ManageScreen from './screens/ManageScreen';
import OverlayScreen from './navigation/OverlayScreen';
import ServicesScreen from './screens/ServicesScreen';
import SettingScreen from './screens/SettingScreen';
import TurnTrackingScreen from './screens/TurnTrackingScreen';

export default function App() {
    console.log(StatusBar.currentHeight);
    const [currentTab, setCurrentTab] = React.useState('Services');
    const [showMenu, setShowMenu] = React.useState(false);

    //! Animated
    const offsetTranslateX = React.useRef(new Animated.Value(0)).current;
    const scaleValue = React.useRef(new Animated.Value(1)).current;
    const closeButtonValue = React.useRef(new Animated.Value(0)).current;

    const tabButtons = [
        {
            icon: <IconHomeOutline sizeIcon={25} />,
            title: 'Home',
        },
        {
            icon: <IconServicesOutline sizeIcon={25} />,
            title: 'Services',
        },
        {
            icon: <IconTurnTrackingOutline sizeIcon={25} />,
            title: 'Turn Tracking',
        },
        {
            icon: <IconAppointmentOutline sizeIcon={25} />,
            title: 'Appointment',
        },
        {
            icon: <IconManageOutline sizeIcon={25} />,
            title: 'Manage',
        },
        {
            icon: <IconSettingOutline sizeIcon={25} />,
            title: 'Setting',
        },
    ];
    // /* <NavItem icon={<IconHomeOutline style={{ width: 25, height: 25 }} />}>Home</NavItem> */
    const styles = {
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight,
            paddingBottom: StatusBar.currentHeight / 2,
            //! Barbottom
            backgroundColor: Colors.brand,
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
            color: Colors.primary,
        },
        overlay: {
            flex: 1,
            backgroundColor: Colors.primary,
            paddingTop: 50,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 15,
            borderRadius: showMenu ? 15 : 0,
            //Transforming View
            transform: [{ scale: scaleValue }, { translateX: offsetTranslateX }],
        },
        innerOverlay: {
            position: 'relative',
            flex: 1,
            width: '100%',
            paddingTop: 10,
        },
        title: {
            fontSize: 25,
            fontWeight: 'bold',
            color: Colors.tertiary,
        },
        search: {
            flexDirection: "row",
            width: '100%',
            padding: 16,
            backgroundColor: Colors.green,
        }
    };

    return (
        <React.Fragment>
            <SafeAreaView style={styles.container}>
                {
                    //! Search
                }
                <View style={styles.search}>
            
                </View>
                <View style={styles.innerContainer}>
                    <Image style={styles.avatar} source={require('./assets/images/img1.png')} />
                    <Text style={styles.username}>Nails-sys</Text>
                    <TouchableOpacity>
                        <Text style={{ marginTop: 6, color: Colors.primary }}>Profile</Text>
                    </TouchableOpacity>
                    {
                        //! Menu
                    }
                    <View style={{ flex: 1, marginTop: 50 }}>
                        {tabButtons.map((tabButton, index) => (
                            <TabButton key={index} icon={tabButton.icon} title={tabButton.title} currentTab={currentTab} setCurrentTab={setCurrentTab} />
                        ))}
                    </View>
                    <View>
                        <TabButton icon={<IconSignoutOutline sizeIcon={25} />} title="SignOut" currentTab={currentTab} setCurrentTab={setCurrentTab} />
                    </View>
                </View>
                {
                    //! Overlay View
                }
                <Animated.View style={styles.overlay}>
                    {
                        //! Extensions Icon
                    }
                    <TouchableOpacity
                        onPress={() => {
                            Animated.timing(scaleValue, {
                                toValue: showMenu ? 1 : 0.85,
                                duration: 200,
                                easing: EasingNode.linear,
                                useNativeDriver: true,
                            }).start();
                            setShowMenu(!showMenu);
                            Animated.timing(offsetTranslateX, {
                                toValue: showMenu ? 0 : 230,
                                duration: 200,
                                easing: EasingNode.linear,
                                useNativeDriver: true,
                            }).start();
                            setShowMenu(!showMenu);
                        }}
                    >
                        <View style={{ padding: 5 }}>
                            <IconExtensions sizeIcon={25} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.innerOverlay}>
                        <Text style={styles.title}>{currentTab}</Text>
                        <View style={{ flex: 1 , backgroundColor: '#f7f7f7', alignItems: 'center' }}>
                            {currentTab === 'Home' ? (
                                <HomeScreen />
                            ) : currentTab === 'Services' ? (
                                <ServicesScreen />
                            ) : currentTab === 'Turn Tracking' ? (
                                <TurnTrackingScreen />
                            ) : currentTab === 'Appointment' ? (
                                <AppointmentScreen />
                            ) : currentTab === 'Manage' ? (
                                <ManageScreen />
                            ) : currentTab === 'Setting' ? (
                                <SettingScreen />
                            ) : (
                                <HomeScreen />
                            )}
                            {/* <View>{currentTab === 'Home' ? <HomeScreen/> : <HomeScreen/>}</View> */}
                        </View>
                    </View>
                </Animated.View>
            </SafeAreaView>
            <ExpoStatusBar style='auto'/>
        </React.Fragment>
    );
}
