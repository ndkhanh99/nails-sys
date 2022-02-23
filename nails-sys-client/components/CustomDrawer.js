import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Color from '../constants/color';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomDrawer = (props) => {
    // <View style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 10}}>
    // </View>
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0, backgroundColor: Color.primary }}>
                <ImageBackground
                    resizeMode="cover"
                    style={{ flex: 1, width: '100%', height: '100%' }}
                    source={require('../assets/images/blue-menu-bg.jpg')}
                >
                    <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/avatar_personal.jpg')}
                                style={{ height: 80, width: 80, borderRadius: 40, margin: 10 }}
                            />
                            <Text style={{ color: '#ffffff', fontSize: 18, fontFamily: 'Roboto-Medium' }}>Christina Fiora</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{backgroundColor: '#f9f9f9'}}>
                    <Drawer.Section>
                        <DrawerItem
                            icon={({ color, size }) => <MaterialIcons name="home" color={color} size={size} />}
                            label="Home"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => <MaterialIcons name="profile" color={color} size={size} />}
                            label="Services"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => <MaterialIcons name="setting" color={color} size={size} />}
                            label="Setting"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => <MaterialIcons name="account-check-outline" color={color} size={size} />}
                            label="Turn Tracking"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => <MaterialIcons name="exit-to-app" color={color} size={size} />}
                            label="Manager"
                            onPress={() => {}}
                        />
                    </Drawer.Section>
                </View>

                {/* <DrawerItemList {...props} /> */}
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    icon={({ color, size }) => <MaterialIcons name="exit-to-app" color={color} size={size} />}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
};

export default CustomDrawer;
