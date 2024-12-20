import React from 'react';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { MenuIcon } from '../assets/icons';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Stories"
        alignment="center"
        accessoryLeft={renderDrawerAction}
      />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>Go to Details</Button>
      </Layout>
    </SafeAreaView>
  );
};
