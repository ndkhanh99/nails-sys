import React from 'react';
import Svg, { Rect, Line, Polyline } from 'react-native-svg';

const IconManageOutline = ({ index, activeIndex, sizeIcon, theme }) => {
    const styles = {
        st0: {
            fill: index === activeIndex ? theme.colors.text1 : 'none',
            stroke: index === activeIndex ? theme.colors.text1 : theme.colors.text1,
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: 2,
        },
        st1: {
            stroke: index === activeIndex ? theme.colors.boxBackground : theme.colors.text1
        },
        st2: {
            stroke: index === activeIndex ? theme.colors.text1 : theme.colors.text1,
        },
    };

    return (
        <Svg id="icon-appointment-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Rect style={styles.st0} x="1" y="5" width="30" height="26" rx="2" />
            <Line style={[styles.st0, styles.st2]} x1="23" y1="1" x2="23" y2="9" />
            <Line style={[styles.st0, styles.st2]} x1="9" y1="1" x2="9" y2="9" />
            <Polyline style={[styles.st0, styles.st1]} points="8.6 16.79 13.19 22.94 23.41 15.06" />
        </Svg>
    );
};

export default IconManageOutline;
