import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform } from 'react-native';
import AlbumScreen from './AlbumScreen';
import SettingsScreen from './SettingsScreen';

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen
        component={AlbumScreen}
        name="Feed"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />,
        }}
      />
      <Tab.Screen
        component={AlbumScreen}
        name="Notifications"
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: () => <MaterialCommunityIcons name="bell" size={26} />,
        }}
      />
      <Tab.Screen
        component={SettingsScreen}
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
