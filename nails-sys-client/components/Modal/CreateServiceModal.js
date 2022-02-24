import { StyleSheet, View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import theme from '../../themes/Light';
import { connect } from 'react-redux';

//! imp Actions
import { hideModal } from '../../redux/slices/modal/modalSlice';
import { addServiceAsync } from '../../redux/slices/services/servicesSlice';

const CreateServiceModal = (props) => {
    const { hideModal, addServiceAsync } = props;
    
    //! ___DEBUG
    // console.log(`CreateServiceModal - serviceCategoryId: `, serviceCategoryId);

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(50);
    const [content, setContent] = React.useState('');

    const handleChangeName = (event) => {
        setName(event);
    };

    const handleChangePrice = (event) => {
        setPrice(Number(event));
    };

    const handleChangeContent = (event) => {
        setContent(event);
    };

    const handleCreate = () => {
        console.log(`Create Button`);
        addServiceAsync({name: name, price: price, content: content});

        hideModal();
    };

    const styles = {
        container: {
            width: '70%',
            height: 400,
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
            // margin: 10,
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
        inputControl: {
            padding: 20,
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
            <View style={styles.inputControl}>
                <Text>Service name:</Text>
                <TextInput style={styles.input} onChangeText={handleChangeName} value={name}></TextInput>
            </View>
            <View style={styles.inputControl}>
                <Text>Price</Text>
                <TextInput style={styles.input} onChangeText={handleChangePrice} value={price.toString()}></TextInput>
            </View>
            <View style={styles.inputControl}>
                <Text>Content</Text>
                <TextInput  style={styles.input} onChangeText={handleChangeContent} value={content}></TextInput>
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
    return {
    };
};

const mapDispatchToProps = {
    hideModal,
    addServiceAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateServiceModal);
// export default connect(mapStateToProps)(CreateServiceModal);
