import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const DashboardLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: 'Workout',
          tabBarIcon: () => <Ionicons name="barbell" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: () => <Ionicons name="time" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="excercises"
        options={{
          title: 'Excercises',
          tabBarIcon: () => <Ionicons name="body" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
