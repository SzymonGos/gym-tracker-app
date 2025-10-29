import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ThemedView from '../ThemedView/ThemedView';
import { Exercise } from '@/store/exercises/exercisesSlice';

type ExercisesProps = {
  exercises: Exercise[];
};

const Exercises = ({ exercises }: ExercisesProps) => {
  return (
    <ThemedView isSafeArea>
      <Text>{exercises?.length}</Text>
      <FlatList
        data={exercises}
        renderItem={({ item }: { item: Exercise }) => (
          <ThemedView>
            <Text>{item.name}</Text>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
};

export default Exercises;
