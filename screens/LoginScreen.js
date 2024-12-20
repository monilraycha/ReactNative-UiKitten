import React from 'react';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowIosBackIcon } from '../assets/icons';

export const LoginScreen = ({ navigation }) => {
  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Login"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateRegister}>Go to Register</Button>
      </Layout>
    </SafeAreaView>
  );
};
