import React from 'react';
import { View, Text } from 'react-native';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, Colors } from '../components/styles';

const SignIn = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/images/img1.png')} />
            </InnerContainer>
        </StyledContainer>
    );
};

export default SignIn;
