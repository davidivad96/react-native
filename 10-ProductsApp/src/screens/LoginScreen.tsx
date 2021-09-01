import React from 'react';
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginTheme } from '../themes/loginTheme';

export const LoginScreen = () => {
  return (
    <>
      <Background />
      <View style={loginTheme.formContainer}>
        <WhiteLogo />
        <Text style={loginTheme.title}>Login</Text>
        <Text style={loginTheme.label}>Email:</Text>
        <TextInput
          placeholder="Type your email"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="#FFF"
          style={[
            loginTheme.inputField,
            Platform.OS === 'ios' && loginTheme.inputFieldIOS,
          ]}
          selectionColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={loginTheme.label}>Password:</Text>
        <TextInput
          placeholder="******"
          placeholderTextColor="rgba(255,255,255,0.4)"
          underlineColorAndroid="#FFF"
          style={[
            loginTheme.inputField,
            Platform.OS === 'ios' && loginTheme.inputFieldIOS,
          ]}
          selectionColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <View style={loginTheme.buttonContainer}>
          <TouchableOpacity activeOpacity={0.4} style={loginTheme.button}>
            <Text style={loginTheme.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={loginTheme.newUserContainer}>
          <TouchableOpacity activeOpacity={0.4}>
            <Text style={loginTheme.buttonText}>New account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
