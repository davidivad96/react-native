import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props {
  text: string;
  color?: 'default' | 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  onLongPress?: () => void;
}

export const CalcButton = ({
  text,
  color = 'default',
  style = {},
  textStyle = {},
  onPress,
  onLongPress = () => {},
}: Props) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={[styles.button, buttonBackgroundColors[color], style]}
    onPress={onPress}
    onLongPress={onLongPress}
  >
    <Text
      style={[
        styles.buttonText,
        color === 'secondary' ? styles.blackText : styles.whiteText,
        textStyle,
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '500',
  },
  whiteText: {
    color: '#FFF',
  },
  blackText: {
    color: '#000',
  },
});

const buttonBackgroundColors = {
  default: { backgroundColor: '#2D2D2D' },
  primary: { backgroundColor: '#FF9427' },
  secondary: { backgroundColor: '#9B9B9B' },
};
