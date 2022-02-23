import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const ShopScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>ShopScreen</Text>
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

export default ShopScreen;
