import React from 'react';
import { Text } from 'react-native';
import { appTheme } from '../theme/appTheme';

interface Props {
  text: string;
}

export const HeaderTitle = ({ text }: Props) => (
  <Text style={appTheme.title}>{text}</Text>
);
