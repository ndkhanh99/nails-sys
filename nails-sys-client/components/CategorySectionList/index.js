import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import React from 'react';
import axios from 'axios';

//! comps
import CategoryItem from './CategoryItem';

const CategorySectionList = (props) => {
    const { categoryName, categoryColor, categoryScreen, categoryURI } = props.data;
    const isMounted = React.useRef(true);
    const [categories, setCategories] = React.useState([]);

    //! clean-up
    React.useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    // React.useEffect(() => {
    //     // Dimensions.addEventListener('change', () => adaptLayout)
    //     if (isMounted.current) {
    //         // setCategoryWidth(() => getCategoryData(screenWidth).categoryWidth);
    //         // numColumns.current(() => getCategoryData(screenWidth).numColumns);
    //         // setGutter(() => getCategoryData(screenWidth).gutter);
    //     }
    // }, [screenWidth]);
    // const adaptLayout = (dimensions) => {
    //     setCategoryWidth(dimensions.window.width)
    // }

    const getCategories = async () => {
        const response = await axios.get(categoryURI);
        console.log(response);
        return response;
    };

    const loadCategories = async () => {
        await getCategories()
            .then((res) => {
                if (isMounted.current) {
                    setCategories(res.data);
                }
            })
            .catch((error) => console.log(`error: `, error));
    };

    React.useEffect(() => {
        const unsubscribe = loadCategories();
        return unsubscribe;
    }, []);
    // <FlatList
    //     style={{flex: 1}}
    //     keyExtractor={(item, index) => index}
    //     // data={categories}
    //     data={{a: 1, b: 2},{a: 1, b: 2},{a: 1, b: 2}}
    //     renderItem={(itemData) => {
    //         return (
    //             // <CategoryItem item={itemData.item} style={{backgroundColor: 'red'}}  />
    //             <Text>{itemData.item.a}</Text>
    //         );
    //     }}
    // numColumns={screenWidth > 1024 ? 7 : screenWidth > 768 ? 5 : 3}
    // />

    return (
        <View style={{ flex: 1 }}>
            <CategoryItem type="button" name={categoryName} screen={categoryScreen} color={categoryColor}/>
            <FlatList
                keyExtractor={(item, index) => item + index}
                data={categories}
                // renderItem={(itemData) => <Text>{itemData.item.username}</Text>}
                renderItem={(itemData) => <CategoryItem type="" name={itemData.item.name} screen={categoryScreen} color={categoryColor} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
})

export default CategorySectionList;
