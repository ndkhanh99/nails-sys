import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


function Details() {
    
    const navigation = useNavigation();
    const route = useRoute();
    const {itemID} = route.params;
    const deletaItem = (itemID) => {
        fetch(`http://localhost:3000/delete/${itemID.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(itemID => {
            navigation.navigate("Category")
        })
        .catch(error => console.log(error))
    };

    const editItem = (itemID) => {
        fetch(`http://localhost:3000/delete/${itemID.id}/`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(itemID => {
            navigation.navigate("Edit")
        })
        .catch(error => console.log(error))
    }

    return (
        <SafeAreaView>
            <View style ={{ textAlign: 'center', alignItems: 'center', marginTop: 30,}}>
                <Text>{itemID.id}</Text>
                <Text>{itemID.name_cat}</Text>
            </View>
            <Button
            title = "Edit" 
            onPress = {() => props.navigation.navigate('Edit')}
            />
            <Button
            title = "Delete"
            onPress = { () => deletaItem(itemID) } 
            />
        </SafeAreaView>


    )
}

export default Details;
