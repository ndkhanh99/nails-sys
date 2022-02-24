import React from 'react';
import { TouchableHighlight, View, GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ButtonCreate = () => {
    const COLORS = {
        green: '#86d98c',
        black: 'black'
    };
    
    const lineProps = {
        strokeOpacity: 1,
        strokeWidth: 1,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
    };
    
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={{ width: size, height: size }}>
                <Svg width={size} height={size} viewBox="0 0 32 32" fill={COLORS.green} {...lineProps} stroke={COLORS.green}>
                    <Path d="M29.1,15.44H27.05V29a2,2,0,0,1-2,2h-18a2,2,0,0,1-2-2V15.44H3a2,2,0,0,1-1.25-3.56L14.8,1.44a2,2,0,0,1,2.5,0L30.35,11.88A2,2,0,0,1,29.1,15.44Z" />
                </Svg>
            </View>
        </TouchableHighlight>
    );
};

export default ButtonCreate;
