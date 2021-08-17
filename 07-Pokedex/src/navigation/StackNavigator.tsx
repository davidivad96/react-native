import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { Pokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  Home: undefined;
  Pokemon: {
    pokemon: Pokemon;
    color: string;
  };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFF' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
