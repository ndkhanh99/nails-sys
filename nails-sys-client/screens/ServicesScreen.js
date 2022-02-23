import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView } from 'react-native';
//! API
import axios from 'axios';
//! comps
// import CategoryItem from '../components/CategoryItem';
import CategorySectionList from '../components/CategorySectionList';

//! hooks
import useScreenDimensions from '../hooks/useScreenDimensions';

const CategoryScreen = (props) => {
    const [categoryWidth, setCategoryWidth] = React.useState(Dimensions.get('screen'));
    const numColumns = React.useRef(3);
    const [gutter, setGutter] = React.useState(10);

    const screenHeight = Dimensions.get('window').height;
    // console.log(`screenWidth: `, screenWidth);
    // console.log(`screenHeight: `, screenHeight);

    const screenData = useScreenDimensions();
    const screenWidth = Dimensions.get('screen').width;

    const categoryData = [
        {
            categoryName: 'ENHANCEMENT',
            categoryColor: '#141466',
            categoryScreen: 'EnhancementScreen',
            categoryURI: 'https://jsonplaceholder.typicode.com/users',
        },
        {
            categoryName: 'PEDI/MANI',
            categoryColor: '#972727',
            categoryScreen: 'PediManiScreen',
            categoryURI: 'https://jsonplaceholder.typicode.com/users',
        },
        {
            categoryName: 'WAXING',
            categoryColor: '#6e12cb',
            categoryScreen: 'WaxingScreen',
            categoryURI: 'https://jsonplaceholder.typicode.com/users',
        },
        {
            categoryName: "KID's",
            categoryColor: '#9f7a34',
            categoryScreen: 'KidsScreen',
            categoryURI: 'https://jsonplaceholder.typicode.com/users',
        },
        {
            categoryName: 'CATEGORY5',
            categoryColor: '#28675b',
            categoryScreen: 'Category5',
            categoryURI: 'https://jsonplaceholder.typicode.com/users',
        },
    ];

    // const getCategoryData = (screenWidth) => {
    //     let numColumns = 3;
    //     let gutter = 10;
    //     let categoryWidth = (screenWidth - (numColumns + 1) * gutter) / numColumns;

    //     if (screenWidth >= 768) {
    //         numColumns = 5;
    //         gutter = 10;
    //         categoryWidth = (screenWidth - (numColumns + 1) * gutter) / numColumns;
    //     }
    //     if (screenWidth >= 1024) {
    //         numColumns = 7;
    //         gutter = 10;
    //         categoryWidth = (screenWidth - (numColumns + 1) * gutter) / numColumns;
    //     }
    //     //!iPad Air : 1180 x 820
    //     return { numColumns: numColumns, gutter: gutter, categoryWidth: categoryWidth };
    // };

    // const formatData = (data, numColumns) => {
    //     const numberOfFullRows = Math.floor(data.length / numColumns);
    //     let numberOfElementLastRows = data.length - numberOfFullRows * numColumns;
    //     while (numberOfElementLastRows !== 0 && numberOfElementLastRows !== numColumns) {
    //         //! add [element data except index and separators]
    //         //! username and id
    //         data.push({ username: `blank-${numberOfElementLastRows}`, empty: true });
    //         numberOfElementLastRows += 1;
    //     }
    //     return data;
    // };

    // const CategoryItemWithEmpty = (itemData) => {
    //     if (itemData.item.empty === true) {
    //         return <CategoryItem item={itemData.item} empty={true} style={{ width: categoryWidth, height: categoryWidth }} />;
    //     }
    //     return <CategoryItem item={itemData.item} style={{ width: categoryWidth, height: categoryWidth }} />;
    // };

    return (
        <ScrollView horizontal={true} style={styles.screen}>
            {categoryData.map((data, index) => {
                return <CategorySectionList key={index} data={data} />;
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 5,
    },
    container: {},
});

export default CategoryScreen;
