import React from 'react';
import { Text, TextInput } from 'react-native';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginTheme } from '../themes/loginTheme';

export const LoginScreen = () => {
  return (
    <>
      <Background />
      <WhiteLogo />
      <Text style={loginTheme.title}>Login</Text>
      <Text style={loginTheme.label}>Email:</Text>
      <TextInput
        placeholder="Type your email"
        placeholderTextColor="rgba(255,255,255,0.4)"
      />
    </>
  );
};
