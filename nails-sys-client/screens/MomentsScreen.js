import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const MomentsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>MomentsScreen</Text>
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

export default MomentsScreen;
