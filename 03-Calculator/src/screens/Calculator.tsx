import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { CalcButton } from '../components/CalcButton';
import { useCalculator } from '../hooks/useCalculator';

export const Calculator = () => {
  const {
    number,
    previousNumber,
    operator,
    clear,
    allClear,
    buildNumber,
    changeSign,
    calculate,
    onPressAddOperator,
    onPressSubstractOperator,
    onPressMultiplyOperator,
    onPressDivideOperator,
    onPressPercentageOperator,
    Operators,
  } = useCalculator();

  return (
    <View style={styles.container}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <CalcButton
          text="C"
          color="secondary"
          onPress={clear}
          onLongPress={allClear}
        />
        <CalcButton text="+/-" color="secondary" onPress={changeSign} />
        <CalcButton
          text="%"
          color="secondary"
          onPress={onPressPercentageOperator}
        />
        <CalcButton
          text="÷"
          color="primary"
          style={operator === Operators.divide ? styles.selectedOperator : {}}
          textStyle={styles.biggerText}
          onPress={onPressDivideOperator}
        />
      </View>
      <View style={styles.row}>
        <CalcButton text="7" onPress={() => buildNumber('7')} />
        <CalcButton text="8" onPress={() => buildNumber('8')} />
        <CalcButton text="9" onPress={() => buildNumber('9')} />
        <CalcButton
          text="×"
          color="primary"
          style={operator === Operators.multiply ? styles.selectedOperator : {}}
          textStyle={styles.biggerText}
          onPress={onPressMultiplyOperator}
        />
      </View>
      <View style={styles.row}>
        <CalcButton text="4" onPress={() => buildNumber('4')} />
        <CalcButton text="5" onPress={() => buildNumber('5')} />
        <CalcButton text="6" onPress={() => buildNumber('6')} />
        <CalcButton
          text="−"
          color="primary"
          style={
            operator === Operators.substract ? styles.selectedOperator : {}
          }
          textStyle={styles.biggerText}
          onPress={onPressSubstractOperator}
        />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" onPress={() => buildNumber('1')} />
        <CalcButton text="2" onPress={() => buildNumber('2')} />
        <CalcButton text="3" onPress={() => buildNumber('3')} />
        <CalcButton
          text="+"
          color="primary"
          style={operator === Operators.add ? styles.selectedOperator : {}}
          textStyle={styles.biggerText}
          onPress={onPressAddOperator}
        />
      </View>
      <View style={styles.row}>
        <CalcButton
          text="0"
          style={styles.specialButton}
          textStyle={styles.specialButtonText}
          onPress={() => buildNumber('0')}
        />
        <CalcButton text="." onPress={() => buildNumber('.')} />
        <CalcButton
          text="="
          color="primary"
          textStyle={styles.biggerText}
          onPress={calculate}
        />
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
    fontSize: 50,
    textAlign: 'right',
    marginBottom: 10,
  },
  smallResult: {
    color: '#FFF',
    opacity: 0.5,
    fontSize: 25,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  specialButton: {
    ...Platform.select({
      ios: { flex: 0.9 },
      android: { flex: 1 },
    }),
    paddingLeft: 30,
  },
  specialButtonText: {
    textAlign: 'left',
  },
  biggerText: {
    fontSize: 45,
    ...Platform.select({
      ios: { lineHeight: 45 },
    }),
  },
  selectedOperator: {
    borderColor: '#FFF',
    borderWidth: 2,
  },
});
