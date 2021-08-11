import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';

export const SlidesScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <HeaderTitle text="Slides" color="#5856D6" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
