import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const TurnTrackingScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>TurnTrackingScreen</Text>
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

export default TurnTrackingScreen;
