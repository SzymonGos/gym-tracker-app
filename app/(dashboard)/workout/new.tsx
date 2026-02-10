import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import ThemedView from '@/components/ThemedView/ThemedView';
import ExercisesList from '@/components/Exercises/ExercisesList';
import { useExercisesQuery } from '@/hooks/useExercisesQuery';
import { Exercise } from '@/store/exercises/exercisesSlice';
import ExercisesModal from '@/components/Exercises/ExercisesModal';

const NewWorkout = () => {
  const { data: exercises, isLoading } = useExercisesQuery();

  // use ContextAPI to store selected exercises
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExercisePress = (exercise: Exercise) => {
    setSelectedExercises(
      selectedExercises.includes(exercise)
        ? selectedExercises.filter(id => id !== exercise)
        : [...selectedExercises, exercise]
    );
  };

  if (isLoading) {
    return (
      <ThemedView>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }

  return (
    <ThemedView className="h-full">
      <ExercisesList
        exercises={exercises || []}
        onPress={handleExercisePress}
        selectedExercises={selectedExercises}
      />
      <ExercisesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </ThemedView>
  );
};

export default NewWorkout;
