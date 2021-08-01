import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { appTheme } from '../theme/appTheme';

interface Form {
  name: string;
  email: string;
  phone: string;
}

export const TextInputScreen = () => {
  const { top } = useSafeAreaInsets();

  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

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
        <View style={styles.switchRow}>
          <Text style={styles.switchText}>Subscribe:</Text>
          <CustomSwitch
            isOn={isSubscribed}
            onChange={value => onChange(value, 'isSubscribed')}
          />
        </View>
        <HeaderTitle text={JSON.stringify(form, null, 3)} />
        <HeaderTitle text={JSON.stringify(form, null, 3)} />
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
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
