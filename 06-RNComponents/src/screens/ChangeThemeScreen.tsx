import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { appTheme } from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {
    theme: { colors },
    setLightTheme,
    setDarkTheme,
  } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <HeaderTitle text="Themes" />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: colors.primary }}
          activeOpacity={0.6}
          onPress={() => setLightTheme()}
        >
          <Text style={styles.buttonText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: colors.primary }}
          activeOpacity={0.6}
          onPress={() => setDarkTheme()}
        >
          <Text style={styles.buttonText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
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
