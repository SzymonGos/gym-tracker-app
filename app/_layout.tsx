import { StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

const RootLayout = () => {
  return (
    <GluestackUIProvider mode="dark">
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </GluestackUIProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
