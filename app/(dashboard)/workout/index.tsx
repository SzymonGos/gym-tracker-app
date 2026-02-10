import React from 'react';
import ThemedView from '@/components/ThemedView/ThemedView';
import { Button, ButtonText } from '@/components/ui/button';
import { Link } from 'expo-router';

const Workout = () => {
  return (
    <ThemedView isSafeArea>
      <ThemedView className="mt-10">
        <Link href="/(dashboard)/workout/new" asChild>
          <Button variant="outline">
            <ButtonText>Add New Workout</ButtonText>
          </Button>
        </Link>
      </ThemedView>
    </ThemedView>
  );
};

export default Workout;
