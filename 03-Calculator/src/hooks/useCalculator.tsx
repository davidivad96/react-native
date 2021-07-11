import { useState, useCallback } from 'react';
import { Alert } from 'react-native';

const FLOATING_NUMBER_REGEX = /^[-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

enum Operators {
  idle,
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [previousNumber, setPreviousNumber] = useState<string>('0');
  const [operator, setOperator] = useState<Operators>(Operators.idle);

  const clear = useCallback(() => {
    setNumber(currentNumber =>
      currentNumber.length === 1 ||
      (currentNumber.length === 2 && currentNumber[0] === '-')
        ? '0'
        : currentNumber.slice(0, -1),
    );
  }, []);

  const allClear = useCallback(() => {
    setNumber('0');
    setPreviousNumber('0');
  }, []);

  const buildNumber = useCallback((numberText: string) => {
    setNumber(currentNumber => {
      if (currentNumber === '0' || currentNumber === '-0') {
        return numberText === '.'
          ? currentNumber.concat('.')
          : currentNumber.replace('0', numberText);
      }
      if (currentNumber.concat(numberText).match(FLOATING_NUMBER_REGEX)) {
        return currentNumber.concat(numberText);
      }
      return currentNumber;
    });
  }, []);

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
      setPreviousNumber(number.endsWith('.') ? number.slice(0, -1) : number);
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

  return {
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
  };
};
