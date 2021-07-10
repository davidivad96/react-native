import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FloatingActionButton } from '../components/FloatingActionButton';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <FloatingActionButton
        title="-1"
        onPress={() => setCounter(currentCounter => currentCounter - 1)}
        position="bl"
      />
      <FloatingActionButton
        title="+1"
        onPress={() => setCounter(currentCounter => currentCounter + 1)}
        position="br"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
});
