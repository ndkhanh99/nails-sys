import { View, Text } from 'react-native';
import React from 'react';

const ServiceDetailsScreen = (props) => {
    const { navigation, route, colorIndex } = props;
    const { service } = route.params;
    console.log(`ServiceDetailsScreen - route.params.service: `, service);
    return (
        <View>
            <Text>ServiceDetailsScreen</Text>
            <Text>ID: {service._id}</Text>
            <Text>Name: {service.name}</Text>
            <Text>Price: {service.price}</Text>
            <Text>Content: {service.content}</Text>

        </View>
    );
};

export default ServiceDetailsScreen;
