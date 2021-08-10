import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';

export const ModalScreen = () => {
  const { top } = useSafeAreaInsets();

  const [visible, setVisible] = useState(false);

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <HeaderTitle text="Modals" color="#5856D6" />
      <Button title="Open modal" onPress={() => setVisible(true)} />
      <Modal animationType="fade" visible={visible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <HeaderTitle text="My modal" />
            <Text>Modal body</Text>
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(rgba(0,0,0,0.3))',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
  },
});
