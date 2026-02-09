import { Text } from 'react-native';
import React from 'react';
import ThemedView from '../ThemedView/ThemedView';
import { Exercise } from '@/store/exercises/exercisesSlice';
import ExercisesModal from './ExercisesModal';
import ExercisesList from './ExercisesList';

type ExercisesProps = {
  exercises: Exercise[];
  onPress: (exercise: Exercise) => void;
  selectedExercise?: Exercise;
  isModalOpen: boolean;
  onModalClose: () => void;
};

const Exercises = ({
  exercises,
  onPress,
  selectedExercise,
  isModalOpen,
  onModalClose,
}: ExercisesProps) => {
  return (
    <ThemedView isSafeArea>
      <Text>{exercises?.length}</Text>
      <ExercisesList exercises={exercises} onPress={onPress} />
      <ExercisesModal
        isOpen={isModalOpen}
        onClose={onModalClose}
        selectedExercise={selectedExercise}
      />
    </ThemedView>
  );
};

export default Exercises;
