import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { ThemeContext } from '../context/theme/ThemeContext';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Animation101" component={Animation101Screen} />
          <Stack.Screen name="Animation102" component={Animation102Screen} />
          <Stack.Screen name="Switch" component={SwitchScreen} />
          <Stack.Screen name="Alert" component={AlertScreen} />
          <Stack.Screen name="TextInput" component={TextInputScreen} />
          <Stack.Screen name="PullToRefresh" component={PullToRefreshScreen} />
          <Stack.Screen
            name="CustomSectionList"
            component={CustomSectionListScreen}
          />
          <Stack.Screen name="Modals" component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScroll"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen name="Slides" component={SlidesScreen} />
          <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
