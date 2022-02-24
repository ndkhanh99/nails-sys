import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//! icons


const AboutScreen = (props) => {
    return (
        <TouchableOpacity style={styles.screen}>
            <View >
                <Text>AboutScreen</Text>
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

export default AboutScreen;
