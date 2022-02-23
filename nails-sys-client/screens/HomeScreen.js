import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//! icons


const HomeScreen = (props) => {
    return (
        <TouchableOpacity style={styles.screen}>
            <View >
                <Text>HomeScreen</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
