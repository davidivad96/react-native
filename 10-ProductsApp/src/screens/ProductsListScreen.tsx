import React, { useContext } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ProductsContext } from '../context/Products/ProductsContext';

export const ProductsListScreen = () => {
  const { products } = useContext(ProductsContext);

  // TODO: Pull to refresh

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={product => product._id}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.3}>
            <Text style={styles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productName: {
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    marginVertical: 5,
  },
});
