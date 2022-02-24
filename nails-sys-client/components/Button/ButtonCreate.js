import React from 'react';
import { StyleSheet, TouchableOpacity, View, GestureResponderEvent } from 'react-native';
import Svg, { Path, Rect, Line } from 'react-native-svg';

const ButtonCreate = ({ size, onPress }) => {
    const COLORS = {
        green: '#86d98c',
        black: 'black',
    };

    const lineProps = {
        strokeOpacity: 1,
        strokeWidth: 1,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
    };

    return (
        <TouchableOpacity onPress={onPress} style={[style.button, { width: size, height: size }]}>
            <View>
                <Svg
                    id="icon-create-services"
                    width={size - 10}
                    height={size - 10}
                    viewBox="0 0 32 32"
                    fill={COLORS.green}
                    {...lineProps}
                    stroke={COLORS.green}
                >
                    <Rect class="cls-1" x="16" y="16" width="15" height="15" rx="2" />
                    <Path class="cls-1" d="M22.75,13V9.75a2,2,0,0,0-2-2h-11a2,2,0,0,0-2,2v11a2,2,0,0,0,2,2H13" />
                    <Path class="cls-1" d="M16,4.75V3a2,2,0,0,0-2-2H3A2,2,0,0,0,1,3V14a2,2,0,0,0,2,2H4.75" />
                    <Line class="cls-1" x1="23.5" y1="19.5" x2="23.5" y2="27.5" />
                    <Line class="cls-1" x1="19.5" y1="23.5" x2="27.5" y2="23.5" />
                </Svg>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    button: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
});

export default ButtonCreate;
