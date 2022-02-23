import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const SignInScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>SignInScreen</Text>
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

export default SignInScreen;
