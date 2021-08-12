import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { appTheme } from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const { setDarkTheme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <HeaderTitle text="Themes" color="#5856D6" />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={setDarkTheme}
      >
        <Text style={styles.buttonText}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 22,
  },
});
