import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const AuthScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>AuthScreen</Text>
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

export default AuthScreen;
