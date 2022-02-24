import { DefaultTheme } from '@react-navigation/native';
const Light = {
    dark: false,
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF',
        white: '#ffffff',
        black: '#000000',
        serviceCategory: ['#000066', '#660000', '#330066', '#663300', '#003333', '#000066', '#660000', '#330066', '#663300', '#003333'],
        service: ['#000099', '#990000', '#660099', '#993300', '#006666', '#000099', '#990000', '#660099', '#993300', '#006666'],
        primary: '#FFAC30',
        secondary: '#F1F3F6',
        grey: '#9d9fa3',
        success: '#228B22',
        error: '#E14161',
        text1: '#1B1D28',
        text2: '#3A4276',
        text3: '#7B7F9E',
        active: '#1B1D28',
        boxBackground: '#F1F3F6',
        category1: '#000080', //! navy
        category2: '#972727',
        category3: '#6e12cb',
        category4: '#9f7a34',
        category5: '#28675b',
        service1: '#3F50AA',
    },
};

export default Light;
