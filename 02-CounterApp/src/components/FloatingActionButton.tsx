import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'bl' | 'br';
}

export const FloatingActionButton = ({
  title,
  onPress,
  position = 'br',
}: Props) => {
  const ios = () => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, positionStyles[position]]}
      activeOpacity={0.5}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const android = () => (
    <View>
      <TouchableNativeFeedback
        onPress={onPress}
        style={[styles.buttonContainer, positionStyles[position]]}
        background={TouchableNativeFeedback.Ripple('#28425B', false, 3)}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
  },
  button: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  left: {
    left: 30,
  },
  right: {
    right: 30,
  },
});

const positionStyles = {
  bl: styles.left,
  br: styles.right,
};
