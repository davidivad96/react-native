import React, { useCallback, useContext, useState } from 'react';
import { Platform, Switch, View } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = useCallback(() => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  }, [isEnabled, onChange]);

  return (
    <View>
      <Switch
        trackColor={{ false: '#D9D9DB', true: colors.primary }}
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
