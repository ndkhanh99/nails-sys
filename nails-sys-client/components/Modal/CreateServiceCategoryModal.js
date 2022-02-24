import { StyleSheet, View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import theme from '../../themes/Light';
import { connect } from 'react-redux';

//! imp Actions
import { hideModal } from '../../redux/slices/modal/modalSlice';
import { addServiceCategoryAsync } from '../../redux/slices/services/servicesSlice';

const CreateServiceCategoryModal = (props) => {
    const { hideModal, addServiceCategoryAsync } = props;

    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        setName(event);
        console.log(event);
    };

    const handleCreate = () => {
        console.log(`Create Button`);
        addServiceCategoryAsync({ name: name });
        hideModal();
    };

    const styles = {
        container: {
            width: '70%',
            height: 350,
            borderRadius: 10,
            backgroundColor: theme.colors.background,
            padding: 10,
        },
        containerSmall: {
            width: 300,
            height: 250,
            borderRadius: 5,
            backgroundColor: theme.colors.background,
            padding: 20,
        },
        title: {},
        input: {
            height: 40,
            margin: 12,
            padding: 10,
            borderBottomWidth: 1,
        },
        footer: {
            flexDirection: 'row-reverse',
        },
        button: {
            fontSize: 16,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            margin: 15,
            color: theme.colors.success,
        },
    };

    let containerStyles = styles.container;

    // Just like "@media screen and (max-width: 350px)"
    if (Dimensions.get('window').width < 480) {
        containerStyles = styles.containerSmall;
    }

    return (
        <View style={containerStyles}>
            <View style={styles.title}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Create A Service Category</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text>Category name:</Text>
                <TextInput style={styles.input} onChangeText={handleChange} value={name}></TextInput>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => handleCreate()}>
                    <Text style={styles.button}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => hideModal()}>
                    <Text style={styles.button}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    hideModal,
    addServiceCategoryAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateServiceCategoryModal);
