import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import useCachedResources from './hooks/useCachedResources';
//!expo
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

//! comps
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import CategoryScreen from './screens/CategoryScreen';

const App = () => {
    const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);

    const fetchFonts = async () => {
        await Font.loadAsync({
            'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
            'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
            'roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
            'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
            'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
            'Roboto-LightItalic': require('./assets/fonts/Roboto-Light.ttf'),
            'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
            'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
            'roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
            'Roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
        });
    };

    if (!isLoadingComplete) {
        return <AppLoading startAsync={() => fetchFonts()} onFinish={() => setIsLoadingComplete(true)} onError={() => console.warn} />;
    }

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Auth" component={AuthScreen} />
                <Stack.Screen name="Category" component={CategoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
