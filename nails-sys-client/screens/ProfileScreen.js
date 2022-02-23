import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const ProfileScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>ProfileScreen</Text>
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

export default ProfileScreen;
