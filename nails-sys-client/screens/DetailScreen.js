import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import Details from '../components/Details';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Edit from '../components/Edit';
import { TextInput, Button } from 'react-native-paper';

function DetailsScreen(props) {

    const DetailStack = createStackNavigator();
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

    

    const Detail = (props) => {
        
        return(
            <View  >

                <View style = {styles.Detail_View}>

                    <Text>{itemID.id}</Text>

                    <Text>{itemID.name_cat}</Text>

                </View>

                <View style = {styles.ButtonView}>
                    <Button
                        icon = "pencil"
                        mode = "contained"
                        onPress = {() => props.navigation.navigate('Edit', { data:itemID})}
                    >Edit</Button>

                    <Button
                        icon = "delete"
                        mode = "contained"
                        onPress = { () => deletaItem(itemID) } 
                    >Delete</Button>

                </View>

            </View>
        )
    };

    const Edits = (props) => {

        const data = props.route.params.data;
        const [ Title , setTitle ] = useState(data.name_cat);
        const Updtae_data = () => {
            fetch(`http://localhost:3000/update/${itemID.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({title:Title})
            })
            .then(resp => resp.json())
            .then(data => {
                navigation.navigate("Category")
            })
            .catch(error => console.log(error))
        }
        return(
            <View style = {styles.EditView} >
                <TextInput
                label = "title"
                value = {Title}
                mode = 'outlined'
                multiline
                numberOfLines = {5}
                onChangeText = { text => setTitle(text) } 
                />

                <View style = {styles.UpdateView}>
                    <Button

                        icon = "update"
                        mode = "contained"
                        onPress = {() => Updtae_data(data)}
                    >Update Title</Button>

                </View>
            </View>
        )
    };



    return (
        <DetailStack.Navigator initialRouteName="Detail_Item">
            <DetailStack.Screen name = "Detail_Item" component = {Detail} />
            <DetailStack.Screen name = "Edit" component = {Edits} />
        </DetailStack.Navigator>
    )
}

const styles = StyleSheet.create({
    Detail_View: {
        padding: 30,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
    },
    EditView: {
        padding: 20,
        margin: 20,

    },
    ButtonView: {
        flexDirection: "row",
        justifyContent: 'space-around',
        padding: 30,
        marginRight: 200,
        marginLeft: 200,
    },
    UpdateView: {
        flexDirection: "row",
        justifyContent: 'space-around',
        padding: 30,
        marginRight: 150,
        marginLeft: 150,
    }
});

export default DetailsScreen;
