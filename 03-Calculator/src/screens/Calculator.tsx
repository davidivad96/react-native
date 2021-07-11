import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CalcButton } from '../components/CalcButton';

const FLOATING_NUMBER_REGEX = /^[-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

export const Calculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [previousNumber, setPreviousNumber] = useState<string>('0');

  const clear = useCallback(() => {
    if (number.length === 1) {
      setNumber('0');
    } else {
      setNumber(currentNumber => currentNumber.slice(0, -1));
    }
  }, [number]);

  const allClear = useCallback(() => {
    setNumber('0');
    setPreviousNumber('0');
  }, []);

  const buildNumber = useCallback(
    (numberText: string) => {
      if (number === '0') {
        setNumber(numberText === '.' ? '0.' : numberText);
      } else if (number.concat(numberText).match(FLOATING_NUMBER_REGEX)) {
        setNumber(number.concat(numberText));
      }
    },
    [number],
  );

  const changeSign = useCallback(() => {
    if (number[0] === '-') {
      setNumber(currentNumber => currentNumber.slice(1));
    } else if (number !== '0') {
      setNumber(currentNumber => '-'.concat(currentNumber));
    }
  }, [number]);

  const onPressPercentageOperator = useCallback(() => {
    setNumber(`${Number(number) * 0.01}`);
  }, [number]);

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
        <CalcButton text="÷" color="primary" textStyle={styles.biggerText} />
      </View>
      <View style={styles.row}>
        <CalcButton text="7" onPress={() => buildNumber('7')} />
        <CalcButton text="8" onPress={() => buildNumber('8')} />
        <CalcButton text="9" onPress={() => buildNumber('9')} />
        <CalcButton text="×" color="primary" textStyle={styles.biggerText} />
      </View>
      <View style={styles.row}>
        <CalcButton text="4" onPress={() => buildNumber('4')} />
        <CalcButton text="5" onPress={() => buildNumber('5')} />
        <CalcButton text="6" onPress={() => buildNumber('6')} />
        <CalcButton text="−" color="primary" textStyle={styles.biggerText} />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" onPress={() => buildNumber('1')} />
        <CalcButton text="2" onPress={() => buildNumber('2')} />
        <CalcButton text="3" onPress={() => buildNumber('3')} />
        <CalcButton text="+" color="primary" textStyle={styles.biggerText} />
      </View>
      <View style={styles.row}>
        <CalcButton
          text="0"
          style={styles.specialButton}
          textStyle={styles.specialButtonText}
          onPress={() => buildNumber('0')}
        />
        <CalcButton text="." onPress={() => buildNumber('.')} />
        <CalcButton text="=" color="primary" textStyle={styles.biggerText} />
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
    marginBottom: 10,
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
  biggerText: {
    fontSize: 45,
    lineHeight: 45,
  },
});
