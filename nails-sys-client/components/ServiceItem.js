import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
//! update ModalProps
import { setModalProps } from '../redux/slices/modal/modalSlice';
//! Icons
import IconPlusOutline from '../assets/icons/IconPlusOutline';

const ServiceItem = (props) => {
    //@props:
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onPress} style={styles.container}>
            {props.index === 'add' ? (
                <View style={[styles.item, props.style, { backgroundColor: '#D7D7D7' }]}>
                    {
                        //! ADD BUTTON
                    }
                    <Text style={[styles.itemText, { color: props.style?.color }]}>
                        <IconPlusOutline sizeIcon={25} theme={props.theme} color="#636363" />
                    </Text>
                </View>
            ) : (
                <View style={[styles.item, props.style, { backgroundColor: props.colorButton }]}>
                    {
                        //! SERVICE ITEM
                    }
                    <Text style={[styles.itemText, { color: props.style?.color }]}>{props?.title}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.25,
        borderRadius: 10,
    },
    itemText: {
        color: 'white',
    },
});

const mapStateToProps = (state) => {
    return {
        // modalProps: state.modal.modalProps,
    };
};

const mapDispatchToProps = {
    setModalProps,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceItem);