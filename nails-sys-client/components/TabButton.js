import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/color';

const TabButton = (props) => {
    const { icon, title, currentTab, setCurrentTab } = props;

    const handleTabButton = () => {
        if (title === "SignOut") {
            console.log(`SignOut`);
            
            return
        }
        setCurrentTab(title);
    };

    return (
        <TouchableOpacity onPress={handleTabButton}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 8,
                    backgroundColor: currentTab === title ? Colors.primary : 'transparent',
                    paddingLeft: 15,
                    paddingRight: 30,
                    borderRadius: 8,
                    marginTop: 15,
                }}
            >
                {React.cloneElement(icon, { currentTab, title })}
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        paddingLeft: 15,
                        color: currentTab === title ? Colors.tertiary : Colors.primary,
                    }}
                >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default TabButton;
