import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
//! API
import axios from 'axios';
//! comps
import CategoryItem from '../components/CategoryItem';
//! hooks
import useScreenDimensions from '../hooks/useScreenDimensions';

const CategoryScreen = (props) => {
    const [categoryWidth, setCategoryWidth] = React.useState(Dimensions.get('screen'));
    const numColumns = React.useRef(3);
    const [gutter, setGutter] = React.useState(10);

    const [categories, setCategories] = React.useState([]);
    const isMounted = React.useRef(true);
    const screenHeight = Dimensions.get('window').height;
    // console.log(`screenWidth: `, screenWidth);
    // console.log(`screenHeight: `, screenHeight);

    const screenData = useScreenDimensions();
    const screenWidth = Dimensions.get('screen').width;

    const getCategoryData = (screenWidth) => {
        let numColumns = 3;
        let gutter = 10;
        let categoryWidth = (screenWidth - (numColumns + 1) * gutter) / numColumns;

        if (screenWidth >= 768) {
            numColumns = 5;
            gutter = 10;
            categoryWidth = (screenWidth - (numColumns + 1) * gutter) / numColumns;
        }
        if (screenWidth >= 1024) {
            numColumns = 7;
            gutter = 10;
            categoryWidth = (screenWidth - (numColumns + 1) * gutter) / numColumns;
        }
        //!iPad Air : 1180 x 820
        return { numColumns: numColumns, gutter: gutter, categoryWidth: categoryWidth };
    };

    React.useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        // Dimensions.addEventListener('change', () => adaptLayout)
        if (isMounted.current) {
            setCategoryWidth(() => getCategoryData(screenWidth).categoryWidth);
            // numColumns.current(() => getCategoryData(screenWidth).numColumns);
            setGutter(() => getCategoryData(screenWidth).gutter);
        }
    }, [screenWidth]);
    // const adaptLayout = (dimensions) => {
    //     setCategoryWidth(dimensions.window.width)
    // }

    const getCategories = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
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

    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
        let numberOfElementLastRows = data.length - numberOfFullRows * numColumns;
        while (numberOfElementLastRows !== 0 && numberOfElementLastRows !== numColumns) {
            //! add [element data except index and separators]
            //! username and id
            data.push({ username: `blank-${numberOfElementLastRows}`, empty: true });
            numberOfElementLastRows += 1;
        }
        return data;
    };

    const CategoryItemWithEmpty = (itemData) => {
        if (itemData.item.empty === true) {
            return <CategoryItem item={itemData.item} empty={true} style={{ width: categoryWidth, height: categoryWidth }} />;
        }
        return <CategoryItem item={itemData.item} style={{ width: categoryWidth, height: categoryWidth }} />;
    };

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={formatData(categories, screenWidth > 1024 ? 7 : screenWidth > 768 ? 5 : 3)}
                // data={categories}
                style={styles.container}
                renderItem={(itemData) => CategoryItemWithEmpty(itemData)}
                numColumns={screenWidth > 1024 ? 7 : screenWidth > 768 ? 5 : 3}
            />
        </View>
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
