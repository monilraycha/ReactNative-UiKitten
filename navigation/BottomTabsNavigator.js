import { BottomNavigation, BottomNavigationTab, Divider } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsIcon, ProfileIcon, ActivityIcon, VideoIcon } from "../assets/icons"; // Import the icons

import { HomeScreen } from "../screens/HomeScreen";
import { StoryDetailsScreen } from "../screens/StoryDetailScreen";
import { VideosScreen } from "../screens/VideoScreen";
import { SettingsScreen } from "../screens/SettingsScreen"; 
import { ProfileScreen } from "../screens/ProfileScreen"; 

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <View>
    <Divider />
    <BottomNavigation
      appearance="noIndicator"
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="Stories" icon={ActivityIcon} />
      <BottomNavigationTab title="Videos" icon={VideoIcon} />
      <BottomNavigationTab title="Settings" icon={SettingsIcon} /> 
      <BottomNavigationTab title="Profile" icon={ProfileIcon} /> 
    </BottomNavigation>
  </View>
);

export const BottomTabsNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Videos" component={VideosScreen} />
    <Screen name="Details" component={StoryDetailsScreen} />
    {/* <Screen name="Settings" component={SettingsScreen} />
    <Screen name="Profile" component={ProfileScreen} />  */}
  </Navigator>
);
