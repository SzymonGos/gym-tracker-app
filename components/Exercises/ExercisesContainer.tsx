import React, { useState } from 'react';
import Exercises from './Exercises';
import ThemedView from '../ThemedView/ThemedView';
import { ActivityIndicator } from 'react-native';
import { Exercise } from '@/store/exercises/exercisesSlice';
import { useExercisesQuery } from '@/hooks/useExercisesQuery';

const ExercisesContainer = () => {
  const { data: exercises, isLoading } = useExercisesQuery();
  // create modal context
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise>(
    {} as Exercise
  );

  const handleExercisePress = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <ThemedView isSafeArea>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }

  return (
    <Exercises
      exercises={exercises || []}
      onPress={handleExercisePress}
      selectedExercise={selectedExercise}
      isModalOpen={isModalOpen}
      onModalClose={() => setIsModalOpen(false)}
    />
  );
};

export default ExercisesContainer;
