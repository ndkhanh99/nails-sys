import React from 'react';
import Svg, { Path, Rect, Line } from 'react-native-svg';

const IconAddServiceCategoryOutline = ({ nameIcon, activeNameIcon, sizeIcon, theme }) => {
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
        <Svg id="icon-home-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Rect style={styles.st0} x="16" y="16" width="15" height="15" rx="2" />
            <Path style={styles.st0} d="M22.75,13V9.75a2,2,0,0,0-2-2h-11a2,2,0,0,0-2,2v11a2,2,0,0,0,2,2H13" />
            <Path style={styles.st0} d="M16,4.75V3a2,2,0,0,0-2-2H3A2,2,0,0,0,1,3V14a2,2,0,0,0,2,2H4.75" />
            <Line style={styles.st0} x1="23.5" y1="19.5" x2="23.5" y2="27.5" />
            <Line style={styles.st0} x1="19.5" y1="23.5" x2="27.5" y2="23.5" />
        </Svg>
    );
};

export default IconAddServiceCategoryOutline;
