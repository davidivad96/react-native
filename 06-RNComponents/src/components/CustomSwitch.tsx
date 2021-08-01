import React, { useState } from 'react';
import { useCallback } from 'react';
import { Platform, Switch, View } from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = useCallback(() => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  }, [isEnabled, onChange]);

  return (
    <View>
      <Switch
        trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
        thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
