import React from 'react';
import Svg, { Path } from 'react-native-svg';

const IconSettingOutline = ({ index, activeIndex, sizeIcon, theme }) => {

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
        <Svg id="icon-setting-outline" viewBox={`0 0 32 32`} width={sizeIcon || 32} height={sizeIcon || 32}>
            <Path
                style={styles.st0}
                d="M29,13H27.62a11.72,11.72,0,0,0-1.28-3.1l1-1a2,2,0,0,0,0-2.83L25.9,4.69a2,2,0,0,0-2.83,0l-1,1A11.72,11.72,0,0,0,19,4.38V3a2,2,0,0,0-2-2H15a2,2,0,0,0-2,2V4.38A11.72,11.72,0,0,0,9.9,5.66l-1-1a2,2,0,0,0-2.83,0L4.69,6.1a2,2,0,0,0,0,2.83l1,1A11.72,11.72,0,0,0,4.38,13H3a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2H4.38a11.72,11.72,0,0,0,1.28,3.1l-1,1a2,2,0,0,0,0,2.83L6.1,27.31a2,2,0,0,0,2.83,0l1-1A11.72,11.72,0,0,0,13,27.62V29a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V27.62a11.72,11.72,0,0,0,3.1-1.28l1,1a2,2,0,0,0,2.83,0l1.41-1.41a2,2,0,0,0,0-2.83l-1-1A11.72,11.72,0,0,0,27.62,19H29a2,2,0,0,0,2-2V15A2,2,0,0,0,29,13ZM16,23a7,7,0,1,1,7-7A7,7,0,0,1,16,23Z"
            />
        </Svg>
    );
};

export default IconSettingOutline;
