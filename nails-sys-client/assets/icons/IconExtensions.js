import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const IconExtensions = ({ index, activeIndex, sizeIcon, theme }) => {

    const styles = {
        st0: {
            fill: index === activeIndex ? theme.colors.primary : 'none',
            stroke: index === activeIndex ? theme.colors.primary  : 'none',
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: 2,
        },
        st1: {
            fill: index === activeIndex ? theme.colors.primary  : 'none',
        }
    };

    return (
        <Svg id="icon-home-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Rect style={styles.st0} width="32" height="4" rx="2" />
            <Rect style={styles.st0} y="12" width="32" height="4" rx="2" />
            <Rect style={styles.st0} y="24" width="32" height="4" rx="2" />
        </Svg>
    );
};

export default IconExtensions;
