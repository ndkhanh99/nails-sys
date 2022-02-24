import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';

//! theme
import theme from '../../themes/Light';

//!

const ServiceCategoryItem = (props) => {
    const { style, navigation, colorIndex, serviceCategory } = props;
    // console.log(`ServiceCategoryItem-serviceCategory: `, serviceCategory);
    const handleTouch = () => {
        navigation.navigate('ServicecCategoryDetails', { _id: serviceCategory._id, colorIndex: colorIndex });
    };

    const styles = {
        screen: {},
        item: {
            width: ((Dimensions.get('window').width * 65) / 100 - 50) / 4,
            height: ((Dimensions.get('window').width * 45) / 100 - 50) / 4,
            // flex: 1,
            backgroundColor: theme.colors.serviceCategory[colorIndex],
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
        <TouchableOpacity activeOpacity={0.5} onPress={() => handleTouch()} style={{ ...styles.item, ...style }}>
            <View>
                <Text style={styles.itemText}>{serviceCategory?.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ServiceCategoryItem;
