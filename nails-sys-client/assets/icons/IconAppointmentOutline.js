import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const IconAppointmentOutline = ({ index, activeIndex, sizeIcon, theme }) => {
    const styles = {
        st0: {
            fill: index === activeIndex ? theme.colors.text1 : 'none',
            stroke: index === activeIndex ? theme.colors.text1 : theme.colors.text1,
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: 2,
        },
        st1: {
            fill: index === activeIndex ? theme.colors.boxBackground : theme.colors.text1,
            stroke: index === activeIndex ? theme.colors.text1 : theme.colors.boxBackground,
        },
    };

    return (
        <Svg id="icon-home-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Rect style={styles.st0} x="1" y="1" width="30" height="30" rx="2" />
            <Rect style={[styles.st0, styles.st1]} x="5" y="5" width="22" height="4" rx="2" />
            <Rect style={[styles.st0, styles.st1]} x="5" y="14" width="22" height="4" rx="2" />
            <Rect style={[styles.st0, styles.st1]} x="5" y="23" width="22" height="4" rx="2" />
        </Svg>
    );
};

export default IconAppointmentOutline;
