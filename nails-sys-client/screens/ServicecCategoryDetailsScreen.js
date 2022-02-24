import { StyleSheet, Dimensions, View, Text, FlatList } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

//! imp Comps
import ServiceItem from '../components/ServiceSectionList/ServiceItem';

//! imp Actions
import { setModalProps } from '../redux/slices/modal/modalSlice';
import { getServiceCategoriesAsync } from '../redux/slices/services/servicesSlice';

const ServicecCategoryDetailsScreen = (props) => {
    const { navigation, route, getServiceCategoriesAsync, serviceCategories, setModalProps } = props;
    const { colorIndex } = route.params;

    const [buttonWidth, setButtonWidth] = React.useState(((Dimensions.get('window').width * 65) / 100 - 50) / 4);
    const [numColumns, setNumColumns] = React.useState(4);

    //__ DEBUG
    // console.log(`ServicecCategoryDetailsScreen - route.params?._id`, route.params?._id)
    // console.log(`ServicecCategoryDetailsScreen - route: `, route);

    React.useEffect(() => {
        getServiceCategoriesAsync();
        setModalProps({ serviceCategoryId: route.params?._id });
        //!__DEBUG
        // console.log(`ServicecCategoryDetailsScreen - serviceCategories: `, serviceCategories);
    }, []);

    const selectedServiceCategory = serviceCategories.find(sc => sc._id === route.params?._id)
        //!__DEBUG
        // console.log(`ServicecCategoryDetailsScreen - selectedServiceCategory: `, selectedServiceCategory.services)
    const services = selectedServiceCategory.services;

    const formatData = (data, numColumns) => {
        console.log(`data: `, data);
        let numberOfFullRows = Math.floor(data.length / numColumns); //! chia lay nguyen

        //!___DEBUG
        console.log(`numberOfFullRows: `, numberOfFullRows);

        console.log(`data.length: `, data.length);

        //! phan tu le
        let numberOfElementLastRows = data.length - numberOfFullRows * numColumns;

        while (numberOfElementLastRows !== 0 && numberOfElementLastRows !== numColumns) {
            // data.push({ name: `blank-${numberOfElementLastRows}`, empty: true });
            data = [...data, { name: 'black', empty: true }];
            numberOfElementLastRows += 1;
        }
        return data;
    };


    const ServiceItemWithEmpty = (serviceData) => {
        if (serviceData.item.empty === true) {
            return <ServiceItem service={serviceData.item} empty={true} />;
        }
        return <ServiceItem colorIndex={colorIndex} service={serviceData.item} navigation={navigation} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item._id}
                data={formatData(services, numColumns)}
                // data={categories}
                style={styles.container}
                renderItem={(serviceData) => ServiceItemWithEmpty(serviceData)}
                numColumns={numColumns}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => {
    return {
        serviceCategories: state.service.serviceCategories,
    };
};

const mapDispatchToProps = {
    setModalProps,
    getServiceCategoriesAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicecCategoryDetailsScreen);

//! anh bấm A vì a dùng Android giả lập, nhà nghèo mà, chấm chậm load lâu lắm