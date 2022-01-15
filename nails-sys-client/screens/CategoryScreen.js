import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
//! API
import axios from 'axios';
//! comps
import CategoryItem from '../components/CategoryItem';
//! sass
import Grid from '../constants/layout/grid';

const CategoryScreen = (props) => {
    const [categories, setCategories] = React.useState([]);

    const getCategories = async () => {
        const response = await axios.get('http://localhost:3000/get_data');
        return response;
    };

    const loadCategories = async () => {
        await getCategories()
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => console.log(`error: `, error));
    };

    React.useEffect(() => {
        const unsubscribe = loadCategories();
        return unsubscribe;
    }, []);

    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns); //! chia lay nguyen
        let numberOfElementLastRows = data.length - numberOfFullRows * numColumns;
        while (numberOfElementLastRows !== 0 && numberOfElementLastRows !== numColumns) {
            //! add [element data except index and separators]
            //! username and id
            data.push({ name_cat: `blank-${numberOfElementLastRows}`, empty: true });
            numberOfElementLastRows += 1;
        }
        return data;
    };

    const CategoryItemWithEmpty = (itemData) => {
        if (itemData.item.empty === true) {
            return <CategoryItem item={itemData.item} empty={true} />;
        }
        return <CategoryItem item={itemData.item} />;
    };
    
    return (
        <View style={styles.screen}>
            <View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={formatData(categories, Grid.numColumns)}
                    // data={categories}
                    style={styles.container}
                    renderItem={(itemData) => CategoryItemWithEmpty(itemData)}
                    numColumns={Grid.numColumns}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    },
    container: {},
});

export default CategoryScreen;