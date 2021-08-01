import React from 'react';
import { Text } from 'react-native';
import { appTheme } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
}

export const HeaderTitle = ({ text, color = '#000' }: Props) => (
  <Text style={[appTheme.title, { color }]}>{text}</Text>
);
