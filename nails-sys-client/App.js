import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';


// import useCachedResources from './hooks/useCachedResources';
//!expo
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

//! comps
import MainScreen from './screens/MainScreen';
import AuthScreen from './screens/AuthScreen';
import CategoryScreen from './screens/CategoryScreen';
import HomeScreen from './screens/MainScreen';
import SettingScreen from './screens/SettingScreen'
import Details from './screens/DetailScreen';
import CategoryItem from './components/CategoryItem';
import DetailsScreen from './screens/DetailScreen'

const App = (props) => {
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

    const MyStack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Main">

                <Drawer.Screen name="Main" component={HomeScreen}/>
                <Drawer.Screen name="Auth" component={AuthScreen}/>
                <Drawer.Screen name="Setting" component={SettingScreen}/>
                <Drawer.Screen name="Category" component={CategoryScreen} />
                <Drawer.Screen name="Details" component={DetailsScreen} />
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

registerRootComponent(App);

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});