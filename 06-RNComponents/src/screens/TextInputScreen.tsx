import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';

interface Form {
  name: string;
  email: string;
  phone: string;
}

export const TextInputScreen = () => {
  const { top } = useSafeAreaInsets();

  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: keyof Form) => {
    setForm(previousForm => ({
      ...previousForm,
      [field]: value,
    }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
      keyboardVerticalOffset={20}
    >
      <ScrollView>
        <HeaderTitle text="TextInputs" color="#5856D6" />
        <TextInput
          style={styles.textInput}
          placeholder="Input your name"
          autoCorrect={false}
          autoCapitalize="words"
          onChangeText={value => onChange(value, 'name')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Input your email"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={value => onChange(value, 'email')}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Input your phone"
          autoCorrect={false}
          onChangeText={value => onChange(value, 'phone')}
          keyboardType="phone-pad"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
});
