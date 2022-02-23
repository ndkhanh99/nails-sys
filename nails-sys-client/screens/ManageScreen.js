import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const ManageScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>ManageScreen</Text>
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

export default ManageScreen;
