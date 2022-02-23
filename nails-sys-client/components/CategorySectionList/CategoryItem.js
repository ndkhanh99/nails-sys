import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import color from '../../constants/color';
//! sass
import Colors from '../../constants/color';
import Grid from '../../constants/layout/grid';

const CategoryItem = ({ name, screen, color, type, style }) => {
    const touchHandler = () => {};

    const styles = {
        screen: {},
        item: {
            width: ((Dimensions.get('window').width * 65) / 100 - 50) / 4,
            height: ((Dimensions.get('window').width * 40) / 100 - 50) / 4,
            // flex: 1,
            backgroundColor: type === 'button' ? color : '#03254c',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5,
            elevation: 5,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            shadowOpacity: 0.25,
            padding: 10,
            borderRadius: 10,
        },
        itemText: {
            color: 'white',
        },
    };

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={touchHandler} style={{...styles.item}}>
            <View>
                <Text style={styles.itemText}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryItem;
