import React from 'react';
import { router, Stack } from 'expo-router';
import { Button, ButtonText } from '@/components/ui/button';

const WorkoutLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="new"
        options={{
          headerShown: true,
          presentation: 'fullScreenModal',
          headerTitle: 'New Workout',
          headerLeft: () => (
            <Button variant="outline" onPress={() => router.back()}>
              <ButtonText>Back</ButtonText>
            </Button>
          ),
        }}
      />
    </Stack>
  );
};

export default WorkoutLayout;
