import React from 'react';
import Svg, { Path, Line } from 'react-native-svg';
import Colors from '../../constants/color';

const IconSignoutOutline = ({ sizeIcon, theme }) => {

    const styles = {
        st0: {
            fill: 'none',
            stroke: theme.colors.text1,
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: 2,
        },
    };

    return (
        <Svg id="icon-appointment-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Path style={styles.st0} d="M23.94,5.5V3a2,2,0,0,0-2-2H3A2,2,0,0,0,1,3V29a2,2,0,0,0,2,2H21.94a2,2,0,0,0,2-2V26.5" />
            <Path style={styles.st0} d="M26.38,10.65l3.94,3.94a2,2,0,0,1,0,2.82l-3.94,3.94" />
            <Line style={styles.st0} x1="16.97" y1="16" x2="30.97" y2="16" />
        </Svg>
    );
};

export default IconSignoutOutline;
