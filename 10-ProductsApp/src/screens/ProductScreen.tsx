import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigation/ProductsNavigator';

interface Props extends StackScreenProps<ProductsStackParams, 'Product'> {}

export const ProductScreen = ({ route, navigation }: Props) => {
  const { id, name = 'New product' } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, [name, navigation]);

  return (
    <View style={styles.container}>
      <Text>
        {id} {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
