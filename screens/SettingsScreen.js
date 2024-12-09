import React from "react";
import { SafeAreaView, Text, Layout } from "react-native";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { ArrowIosBackIcon } from "../assets/icons";

export const SettingsScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Settings" alignment="center" accessoryLeft={BackAction} />
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text category="h1">Settings Screen</Text>
      </Layout>
    </SafeAreaView>
  );
};
