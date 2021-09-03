import React, { useCallback, useContext } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginTheme } from '../themes/loginTheme';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

export const SignupScreen = () => {
  const { navigate } = useNavigation();
  const { signup } = useContext(AuthContext);

  const { email, password, name, onChange } = useForm({
    email: '',
    password: '',
    name: '',
  });

  const onSignup = useCallback(() => {
    Keyboard.dismiss();
    signup({ nombre: name, correo: email, password });
  }, [email, name, password, signup]);

  const onPressLogin = useCallback(() => {
    navigate('Login');
  }, [navigate]);

  return (
    <>
      <KeyboardAvoidingView
        style={loginTheme.signupContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={loginTheme.formContainer}>
          <WhiteLogo />
          <Text style={loginTheme.title}>Signup</Text>
          <Text style={loginTheme.label}>Name:</Text>
          <TextInput
            placeholder="Type your name"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="#FFF"
            style={[
              loginTheme.inputField,
              Platform.OS === 'ios' && loginTheme.inputFieldIOS,
            ]}
            selectionColor="#FFF"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'name')}
            value={name}
          />
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
              onPress={onSignup}
            >
              <Text style={loginTheme.buttonText}>Create account</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={onPressLogin}
            style={loginTheme.loginButtonContainer}
          >
            <Text style={loginTheme.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
