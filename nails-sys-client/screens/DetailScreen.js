import React from 'react';
import { View, Text, Button } from 'react-native'; 
import Details from '../components/Details'
import { useNavigation, useRoute } from '@react-navigation/native'

function DetailsScreen() {

    return (
        <View>
            <Details />
        </View>
    )
}

export default DetailsScreen;
