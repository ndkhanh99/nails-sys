import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Button } from 'react-native';
//! sass
import Color from '../constants/color';
import Grid from '../constants/layout/grid';
import { useNavigation } from '@react-navigation/native'



function CategoryItem (props) {

    const navigation = useNavigation();
        const itemid = props.item;
        
    return (
        <TouchableOpacity 
            onPress={() => {navigation.navigate('Details', {
                itemID: itemid,
            }); }}
            activeOpacity={0.5} style={!props.empty ? styles.item : [styles.item, styles.itemInvisible]}
            >
            <View>
                <Text style={styles.itemText}>{!props.empty && props.item.id && props.item.id}</Text>
                <Text style={styles.itemText}>{!props.empty && props.item.name_cat && props.item.name_cat}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    screen: {},
    item: {
        height: Dimensions.get('window').width / Grid.numColumns,
        flex: 1,
        backgroundColor: Color.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        padding: 20,
        borderRadius: 10,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
    },
    itemText: {
        color: Color.mainText,
    },
});

console.log(styles.item.height);

export default CategoryItem;