import React from 'react';
import Svg, { Path } from 'react-native-svg';

const IconAddOutline = ({ nameIcon, activeNameIcon, sizeIcon, theme }) => {
    const styles = {
        st0: {
            fill: theme.colors.text1,
            stroke: 'none',
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: 2,
        },
    };

    return (
        <Svg id="icon-add-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Path style={styles.st0} d="M30,14H18V2a2,2,0,0,0-4,0V14H2a2,2,0,0,0,0,4H14V30a2,2,0,0,0,4,0V18H30a2,2,0,0,0,0-4Z" />
        </Svg>
    );
};

export default IconAddOutline;
