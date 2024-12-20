import React from 'react';
import {
  Avatar,
  Drawer,
  DrawerItem,
  IndexPath,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeIcon, InfoIcon, LoginIcon, SettingsIcon } from '../assets/icons';
import { AboutScreen } from '../screens/AboutScreen';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerContent = ({ navigation, state }) => {
  const styles = useStyleSheet(themedStyles);

  const Header = () => (
    <Layout style={styles.header}>
      <View style={styles.profileContainer}>
        <Avatar size="giant" source={require('../assets/boy.png')} />
        <Text style={styles.profileName} category="h6">
          Monil 
        </Text>
      </View>
    </Layout>
  );

  return (
    <SafeAreaView>
      <Drawer
        header={Header}
        selectedIndex={new IndexPath(state.index)}
        onSelect={(index) => navigation.navigate(state.routeNames[index.row])}>
        <DrawerItem title="Home" accessoryLeft={HomeIcon} />
        <DrawerItem title="About" accessoryLeft={InfoIcon} />
        <DrawerItem title="Login" accessoryLeft={LoginIcon} />
        <DrawerItem title= "Setting" accessoryLeft={SettingsIcon} />
      </Drawer>
    </SafeAreaView>
  );
};

export const HomeDrawerNavigator = () => (
  <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Screen name="Home" component={BottomTabsNavigator} />
    <Screen name="About" component={AboutScreen} />
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Register" component={RegisterScreen} />
  </Navigator>
);

const themedStyles = StyleService.create({
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
});
