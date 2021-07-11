import React, { useState, useCallback } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { CalcButton } from '../components/CalcButton';

const FLOATING_NUMBER_REGEX = /^[-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

enum Operators {
  idle,
  add,
  substract,
  multiply,
  divide,
}

export const Calculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [previousNumber, setPreviousNumber] = useState<string>('0');
  const [operator, setOperator] = useState<Operators>(Operators.idle);

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
      } else if (number === '-0') {
        setNumber('-'.concat(numberText));
      } else if (number.concat(numberText).match(FLOATING_NUMBER_REGEX)) {
        setNumber(number.concat(numberText));
      }
    },
    [number],
  );

  const changeSign = useCallback(() => {
    setNumber(currentNumber =>
      currentNumber[0] === '-'
        ? currentNumber.slice(1)
        : '-'.concat(currentNumber),
    );
  }, []);

  const calculate = useCallback(() => {
    switch (operator) {
      case Operators.add:
        setPreviousNumber(
          currentPreviousNumber =>
            `${Number(currentPreviousNumber) + Number(number)}`,
        );
        break;
      case Operators.substract:
        setPreviousNumber(
          currentPreviousNumber =>
            `${Number(currentPreviousNumber) - Number(number)}`,
        );
        break;
      case Operators.multiply:
        setPreviousNumber(
          currentPreviousNumber =>
            `${Number(currentPreviousNumber) * Number(number)}`,
        );
        break;
      case Operators.divide:
        if (number === '0') {
          Alert.alert('Error: ', 'Cannot divide by zero');
        } else {
          setPreviousNumber(
            currentPreviousNumber =>
              `${Number(currentPreviousNumber) / Number(number)}`,
          );
        }
        break;
      default:
        setPreviousNumber(number);
        break;
    }
    setNumber('0');
  }, [number, operator]);

  const moveNumberToPreviousNumber = useCallback(() => {
    if (previousNumber === '0') {
      if (number.endsWith('.')) {
        setPreviousNumber(number.slice(0, -1));
      } else {
        setPreviousNumber(number);
      }
      setNumber('0');
    }
  }, [number, previousNumber]);

  const onPressAddOperator = useCallback(() => {
    setOperator(Operators.add);
    moveNumberToPreviousNumber();
  }, [moveNumberToPreviousNumber]);

  const onPressSubstractOperator = useCallback(() => {
    setOperator(Operators.substract);
    moveNumberToPreviousNumber();
  }, [moveNumberToPreviousNumber]);

  const onPressMultiplyOperator = useCallback(() => {
    setOperator(Operators.multiply);
    moveNumberToPreviousNumber();
  }, [moveNumberToPreviousNumber]);

  const onPressDivideOperator = useCallback(() => {
    setOperator(Operators.divide);
    moveNumberToPreviousNumber();
  }, [moveNumberToPreviousNumber]);

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
  selectedOperator: {
    borderColor: '#FFF',
    borderWidth: 2,
  },
});
