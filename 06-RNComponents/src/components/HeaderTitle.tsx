import React, { useContext } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { appTheme } from '../theme/appTheme';

interface Props {
  text: string;
  style?: StyleProp<TextStyle>;
}

export const HeaderTitle = ({ text, style = {} }: Props) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <Text
      style={[appTheme.title, { color: colors.text, ...(style as TextStyle) }]}
    >
      {text}
    </Text>
  );
};
