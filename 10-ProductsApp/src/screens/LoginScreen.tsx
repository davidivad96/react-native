import React, { useCallback } from 'react';
import { Keyboard } from 'react-native';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { loginTheme } from '../themes/loginTheme';

export const LoginScreen = () => {
  const { navigate } = useNavigation();
  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  const onLogin = useCallback(() => {
    console.log({ email, password });
    Keyboard.dismiss();
  }, [email, password]);

  const onPressNewAccount = useCallback(() => {
    navigate('Signup');
  }, [navigate]);

  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={loginTheme.loginContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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
            onChangeText={value => onChange(value, 'email')}
            value={email}
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
            onChangeText={value => onChange(value, 'password')}
            value={password}
          />
          <View style={loginTheme.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={loginTheme.button}
              onPress={onLogin}
            >
              <Text style={loginTheme.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginTheme.newAccountContainer}>
            <TouchableOpacity activeOpacity={0.4} onPress={onPressNewAccount}>
              <Text style={loginTheme.buttonText}>New account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
