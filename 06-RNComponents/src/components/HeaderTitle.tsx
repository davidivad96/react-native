import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { appTheme } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const HeaderTitle = ({ text, color = '#000', style = {} }: Props) => (
  <Text style={[appTheme.title, { color, ...(style as TextStyle) }]}>
    {text}
  </Text>
);
