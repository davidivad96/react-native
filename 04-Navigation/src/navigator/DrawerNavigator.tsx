import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Settings } from '../screens/Settings';
import { styles, colors } from '../themes/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuButton, styles.row]}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={20} color={colors.black} />
          <Text style={styles.menuText}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, styles.row]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Icon name="cog-outline" size={20} color={colors.black} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
