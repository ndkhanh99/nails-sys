import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

//! imp reducer - actions
import { showModal, hideModal } from '../../redux/slices/modal/modalSlice';

//! imp theme
import theme from '../../themes/Light';

//! imp Screens
import ServicesScreen from '../../screens/ServicesScreen';
import ServicecCategoryDetailsScreen from '../../screens/ServicecCategoryDetailsScreen';
import ServiceDetailsScreen from '../../screens/ServiceDetailsScreen';
import AboutScreen from '../../screens/AboutScreen';

//! imp Icons
import IconAddServiceOutline from '../../assets/icons/IconAddServiceOutline';
import IconAddOutline from '../../assets/icons/IconAddOutline';

const Stack = createStackNavigator();

const ServicesStackNavigator = (props) => {
    const { id, showModal, hideModal, navigation, route } = props;
    // console.log(`ServicesStackNavigator - route: `, route);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ServicesStack"
                component={ServicesScreen}
                options={{
                    headerLeft: (props) => null,
                    // headerRight: () => <Button title="About" color={theme.colors.text1} onPress={() => navigation.navigate('StackAbout')} />,
                    headerRight: () => (
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                                style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => {
                                    console.log(`ServicesStack - CREATE_SERVICE_CATEGORY_MODAL`);
                                    showModal({ id: 'CREATE_SERVICE_CATEGORY_MODAL' });
                                }}
                            >
                                <IconAddOutline sizeIcon={24} theme={theme} />
                            </TouchableOpacity>
                            {/* <ButtonCreate size={25} onPress={() => {}}/> */}
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="ServicecCategoryDetails"
                component={ServicecCategoryDetailsScreen}
                options={{
                    // headerLeft: (props) => null,
                    // headerRight: () => <Button title="About" color={theme.colors.text1} onPress={() => navigation.navigate('StackAbout')} />,
                    headerRight: () => (
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                                style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => {
                                    console.log(`ServicesStack - CREATE_SERVICE_MODAL`);
                                    showModal({ id: 'CREATE_SERVICE_MODAL' });
                                }}
                            >
                                <IconAddServiceOutline sizeIcon={24} theme={theme} />
                            </TouchableOpacity>
                            {/* <ButtonCreate size={25} onPress={() => {}}/> */}
                        </View>
                    ),
                }}
            />
            <Stack.Screen name="ServicecDetails" component={ServiceDetailsScreen} />
            <Stack.Screen name="StackAbout" component={AboutScreen} />
        </Stack.Navigator>
    );
};

// const screenOptionStyle = StyleSheet.create({
//     headerStyle: {
//         backgroundColor: '#9AC4F8',
//     },
//     headerTintColor: 'white',
//     headerBackTitle: 'Back',
// });

const mapStateToProps = (state) => {
    return {
        id: state.modal.id,
    };
};

const mapDispatchToProps = {
    showModal,
    hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesStackNavigator);
