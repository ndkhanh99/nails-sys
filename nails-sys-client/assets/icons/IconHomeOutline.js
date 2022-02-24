import React from 'react';
import Svg, { Path } from 'react-native-svg';

const IconHomeOutline = ({ index, activeIndex, sizeIcon, theme }) => {

    const styles = {
        st0: {
            fill: index === activeIndex ? theme.colors.text1 : 'none',
            stroke: index === activeIndex ? theme.colors.text1 : theme.colors.text1,
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: 2,
        },
    };

    return (
        <Svg id="icon-home-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Path
                style={styles.st0}
                d="M29.1,15.44H27.05V29a2,2,0,0,1-2,2h-18a2,2,0,0,1-2-2V15.44H3a2,2,0,0,1-1.25-3.56L14.8,1.44a2,2,0,0,1,2.5,0L30.35,11.88A2,2,0,0,1,29.1,15.44Z"
            />
        </Svg>
    );
};

export default IconHomeOutline;
