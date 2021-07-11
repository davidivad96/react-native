import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CalcButton } from '../components/CalcButton';

export const Calculator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      <View style={styles.row}>
        <CalcButton text="C" color="secondary" />
        <CalcButton text="+/-" color="secondary" />
        <CalcButton text="%" color="secondary" />
        <CalcButton text="/" color="primary" />
      </View>
      <View style={styles.row}>
        <CalcButton text="7" />
        <CalcButton text="8" />
        <CalcButton text="9" />
        <CalcButton text="X" color="primary" />
      </View>
      <View style={styles.row}>
        <CalcButton text="4" />
        <CalcButton text="5" />
        <CalcButton text="6" />
        <CalcButton text="-" color="primary" />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" />
        <CalcButton text="2" />
        <CalcButton text="3" />
        <CalcButton text="+" color="primary" />
      </View>
      <View style={styles.row}>
        <CalcButton
          text="0"
          style={styles.specialButton}
          textStyle={styles.specialButtonText}
        />
        <CalcButton text="." />
        <CalcButton text="=" color="primary" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  result: {
    color: '#FFF',
    fontSize: 60,
    textAlign: 'right',
  },
  smallResult: {
    color: '#FFF',
    opacity: 0.5,
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  specialButton: {
    flex: 0.9,
    paddingLeft: 30,
  },
  specialButtonText: {
    textAlign: 'left',
  },
});
