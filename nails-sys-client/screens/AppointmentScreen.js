import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AppointmentScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>AppointmentScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AppointmentScreen;
