import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
//! icons
import IconAppointmentOutline from '../../assets/icons/IconAppointmentOutline';
import IconHomeOutline from '../../assets/icons/IconHomeOutline';
import IconManageOutline from '../../assets/icons/IconManageOutline';
import IconServicesOutline from '../../assets/icons/IconServicesOutline';
import IconSettingOutline from '../../assets/icons/IconSettingOutline';
import IconSignoutOutline from '../../assets/icons/IconSignoutOutline';
import IconTurnTrackingOutline from '../../assets/icons/IconTurnTrackingOutline';
import IconExtensions from '../../assets/icons/IconExtensions';

const DrawerContent = (props) => {
    const { navigation, theme, activeIndex, setActiveIndex } = props;
    // const theme = userTheme();
    const drawerItemList = [
        {
            icon: <IconHomeOutline sizeIcon={25} />,
            name: 'Home',
            navigate: 'Home',
        },
        {
            icon: <IconServicesOutline sizeIcon={25} />,
            name: 'Services',
            navigate: 'Services',
        },
        {
            icon: <IconTurnTrackingOutline sizeIcon={25} />,
            name: 'Turn Tracking',
            navigate: 'TurnTracking',
        },
        {
            icon: <IconAppointmentOutline sizeIcon={25} />,
            name: 'Appointment',
            navigate: 'Appointment',
        },
        {
            icon: <IconManageOutline sizeIcon={25} />,
            name: 'Manage',
            navigate: 'Manage',
        },
        {
            icon: <IconSettingOutline sizeIcon={25} />,
            name: 'Setting',
            navigate: 'Setting',
        },
    ];

    const styles = {
        logo: {
            width: 60,
            height: 60,
            borderRadius: 10,
        },
        textName: {
            fontSize: 16,
            fontWeight: 'normal',
        },
    };
    return (
        <View style={{ flex: 1 }}>
            {
                //! Header
            }
            <View style={{}}>
                <Image style={styles.logo} source={require('../../assets/images/img1.png')} />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: theme.colors.primary,
                    }}
                >
                    Nails-sys
                </Text>
                <TouchableOpacity>
                    <Text style={{ marginTop: 6, color: theme.colors.black }}>Profile</Text>
                </TouchableOpacity>
            </View>
            {
                //! Drawer Items
            }
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    {drawerItemList.map((drawerItem, index) => {
                        return (
                            <DrawerItem
                                focused={activeIndex === index}
                                activeTintColor={theme.colors.primary}
                                key={index}
                                onPress={() => {
                                    navigation.navigate(drawerItem.navigate);
                                    setActiveIndex(index);
                                }}
                                label={({ focused }) => {
                                    return (
                                        <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                                            <View style={{ marginRight: 20 }}>
                                                {React.cloneElement(drawerItem.icon, { index, activeIndex, theme })}
                                            </View>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: focused ? 'bold' : 'normal',
                                                }}
                                            >
                                                {drawerItem.name}
                                            </Text>
                                        </View>
                                    );
                                }}
                            ></DrawerItem>
                        );
                    })}
                </DrawerContentScrollView>
            </View>
            {
                //! Footer
            }
            <DrawerItem
                onPress={() => {}}
                label={() => {
                    return (
                        <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                            <View style={{ marginRight: 20 }}>
                                <IconSignoutOutline theme={theme} sizeIcon={25} />
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                }}
                            >
                                SignOut
                            </Text>
                        </View>
                    );
                }}
            ></DrawerItem>
        </View>
    );
};

export default DrawerContent;
