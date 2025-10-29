import { Text, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import ThemedView from '../ThemedView/ThemedView';
import { Exercise } from '@/store/exercises/exercisesSlice';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '../ui/modal';

type ExercisesProps = {
  exercises: Exercise[];
};

const Exercises = ({ exercises }: ExercisesProps) => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleExercisePress = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setIsOpen(true);
  };

  return (
    <ThemedView isSafeArea>
      <Text>{exercises?.length}</Text>
      <FlatList
        data={exercises}
        keyExtractor={item => item.id}
        renderItem={({ item }: { item: Exercise }) => (
          <Pressable onPress={() => handleExercisePress(item)}>
            <ThemedView>
              <Text>{item.name}</Text>
            </ThemedView>
          </Pressable>
        )}
      />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="full">
        <ModalBackdrop />
        <ModalContent size="lg" className="h-[90%]">
          <ModalHeader>
            <Text>{selectedExercise?.name}</Text>
            <ModalCloseButton onPress={() => setIsOpen(false)}>
              <Text>Close</Text>
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>Category: {selectedExercise?.category || 'N/A'}</Text>
            <Text>
              Primary Muscle: {selectedExercise?.primary_muscle || 'N/A'}
            </Text>
            <Text>Equipment: {selectedExercise?.equipment || 'N/A'}</Text>
            <Text>Instructions: {selectedExercise?.instructions || 'N/A'}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ThemedView>
  );
};

export default Exercises;
