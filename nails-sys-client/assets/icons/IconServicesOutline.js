import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import Colors from './../../constants/color';

const IconServicesOutline = ({ index, activeIndex, sizeIcon, theme }) => {

    const styles = {
        st0: {
            fill: index === activeIndex ? theme.colors.text1  : 'none',
            stroke: index === activeIndex ? theme.colors.text1  : theme.colors.text1,
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: 2,
        },
    };

    return (
        <Svg id="icon-services-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Rect style={styles.st0} x="1" y="1" width="12" height="12" rx="2" />
            <Rect style={styles.st0} x="19" y="1" width="12" height="12" rx="2" />
            <Rect style={styles.st0} x="1" y="19" width="12" height="12" rx="2" />
            <Rect style={styles.st0} x="19" y="19" width="12" height="12" rx="2" />
        </Svg>
    );
};

export default IconServicesOutline;
