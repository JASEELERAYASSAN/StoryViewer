import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from '../screens/Chats';
import Status from '../screens/Status';
import Calls from '../screens/Calls';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function TabBar() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
    tabBarLabelStyle: { fontSize: 12, color: '#ffffff',fontWeight: '900' },
    tabBarStyle: { backgroundColor: '#25d366' },
  }}>
      <Tab.Screen
        name="Chats"
        component={Chats}
      />
      <Tab.Screen
        name="Status"
        component={Status}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabBar

const styles = StyleSheet.create({})