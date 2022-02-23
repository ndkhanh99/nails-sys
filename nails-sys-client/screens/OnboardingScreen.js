import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LogoNailsSys from '../assets/icons/LogoNailsSys';
//! constants abstract
import Color from '../constants/color';

const navigateToSignIn = (props) => {
    props.navigation.navigate('SignIn');
};

const OnboardingScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
            <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#491b32' }}>NAIL-SYS</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <LogoNailsSys width={300} height={300} transform={[{ rotate: 0 }]} />
            </View>
            <TouchableOpacity activeOpacity={0.75} style={styles.touchWelcom} onPress={navigateToSignIn.bind(this, props)}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff', fontFamily: 'Roboto-MediumItalic' }}>Welcome to Nailsys</Text>
                <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    touchWelcom: {
        backgroundColor: Color.primary,
        width: '90%',
        padding: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
});

export default OnboardingScreen;
