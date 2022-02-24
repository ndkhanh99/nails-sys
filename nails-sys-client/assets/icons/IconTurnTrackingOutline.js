import React from 'react';
import Svg, { Circle, Polyline } from 'react-native-svg';

const IconTurnTrackingOutline = ({ index, activeIndex, sizeIcon, theme }) => {

    const styles = {
        st0: {
            fill: index === activeIndex ? theme.colors.text1  : 'none',
            stroke: index === activeIndex ? theme.colors.text1  : theme.colors.text1,
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: 2,
        },
        st1: {
            stroke: index === activeIndex ? theme.colors.boxBackground : theme.colors.text1,
        }
    };

    return (
        <Svg id="icon-appointment-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Circle style={styles.st0} cx="15.5" cy="15.5" r="14.5" />
            <Polyline style={[styles.st0, styles.st1]} class="cls-1" points="15.5 4 15.5 16 21.5 16" />
        </Svg>
    );
};

export default IconTurnTrackingOutline;
