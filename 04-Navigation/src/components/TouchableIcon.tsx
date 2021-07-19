import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../themes/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({ iconName }: Props) => (
  <TouchableOpacity>
    <Icon name={iconName} size={80} color={colors.primary} />
  </TouchableOpacity>
);
