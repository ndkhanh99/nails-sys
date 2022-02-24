import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Modal, View, Text, TouchableOpacity } from 'react-native';
// //! API
import axios from 'axios';
//! comps
import ServiceSectionList from '../components/ServiceSectionList';
// import { CreateServiceCategoryModal } from '../components/Modal/CreateServiceCategoryModal';
//imp react-redux
import { connect } from 'react-redux';
//! imp Actions
import { getServiceCategoriesAsync } from '../redux/slices/services/servicesSlice';

//! hooks
import useScreenDimensions from '../hooks/useScreenDimensions';

//! utils
import { PlatformBaseUrl } from '../utils';

//! theme
import theme from '../themes/Light';

const ServicesScreen = (props) => {
    const { navigation, route, serviceCategories, getServiceCategoriesAsync } = props;

    // const [categoryWidth, setCategoryWidth] = React.useState(Dimensions.get('screen'));
    // const isMounted = React.useRef(true); // Initial value _isMounted = true

    // const screenData = useScreenDimensions();

    // const screenWidth = Dimensions.get('screen').width;
    // const screenHeight = Dimensions.get('window').height;

    // DidMount Once
    // React.useEffect(() => {
    //     dispatch(getServiceCategoriesAsync());
    // }, []);

    //! ___DEBUG
    // console.log(`ServicesScreen - serviceCategories: `, serviceCategories);

    // //! Dispatch change
    React.useEffect(() => {
        getServiceCategoriesAsync();
    }, []);

    //! State change
    // React.useEffect(() => {
    //     // return response;
    //         setCategories(serviceCategories);
    //     // if (isMounted.current) {
    //     // }
    // }, [categories]);

    // const categoryData = [
    //     {
    //         categoryName: 'ENHANCEMENT',
    //         categoryScreen: 'EnhancementScreen',
    //         // categoryURI: 'https://jsonplaceholder.typicode.com/users',
    //     },
    //     {
    //         categoryName: 'PEDI/MANI',
    //         categoryScreen: 'PediManiScreen',
    //         categoryURI: 'https://jsonplaceholder.typicode.com/users',
    //     },
    //     {
    //         categoryName: 'WAXING',
    //         categoryScreen: 'WaxingScreen',
    //         categoryURI: 'https://jsonplaceholder.typicode.com/users',
    //     },
    //     {
    //         categoryName: "KID's",
    //         categoryScreen: 'KidsScreen',
    //         categoryURI: 'https://jsonplaceholder.typicode.com/users',
    //     },
    //     {
    //         categoryName: 'CATEGORY5',
    //         categoryScreen: 'Category5',
    //         categoryURI: 'https://jsonplaceholder.typicode.com/users',
    //     },
    // ];
    // <View style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, backgroundColor: 'black', opacity: 0.25 }} />

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.content}>
                {serviceCategories?.map((serviceCategory, index) => {
                    let colorIndex = Number(index.toString().slice(-1));
                    return <ServiceSectionList key={index} colorIndex={colorIndex} serviceCategory={serviceCategory} navigation={navigation} />;
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});

const mapStateToProps = (state) => {
    return {
        // id: state.modal.id,
        serviceCategories: state.service.serviceCategories,
    };
};

const mapDispatchToProps = {
    // setModalProps,
    getServiceCategoriesAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesScreen);
