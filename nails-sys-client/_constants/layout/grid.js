import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const getCourseWidth = (screenWidth) => {
    var cardWidth = screenWidth - 40;
    if (screenWidth >= 768) {
        cardWidth = (screenWidth - 60) / 2;
    }
    if (screenWidth >= 1024) {
        cardWidth = (screenWidth - 80) / 3;
    }
    return cardWidth;
};

export default {
    numColumns: 3,
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height,
};
