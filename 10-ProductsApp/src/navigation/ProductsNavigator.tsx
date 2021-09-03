import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsListScreen } from '../screens/ProductsListScreen';
import { ProductScreen } from '../screens/ProductScreen';

export type ProductsStackParams = {
  ProductsList: undefined;
  Product: { id?: string; name?: string };
};

const Stack = createStackNavigator<ProductsStackParams>();

export const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}
    >
      <Stack.Screen
        name="ProductsList"
        component={ProductsListScreen}
        options={{ title: 'Products List' }}
      />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
