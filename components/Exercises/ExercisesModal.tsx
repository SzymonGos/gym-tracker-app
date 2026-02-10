import { Text } from 'react-native';
import React from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from '../ui/modal';
import { Exercise } from '@/store/exercises/exercisesSlice';

type TExercisesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedExercise?: Exercise;
};

const ExercisesModal = ({
  isOpen,
  onClose,
  selectedExercise,
}: TExercisesModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent size="lg" className="h-[90%]">
        <ModalHeader>
          <Text>{selectedExercise?.name}</Text>
          <ModalCloseButton onPress={onClose}>
            <Text>Close</Text>
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>Category: {selectedExercise?.category}</Text>
          <Text>Primary Muscle: {selectedExercise?.primary_muscle}</Text>
          <Text>Equipment: {selectedExercise?.equipment}</Text>
          <Text>Instructions: {selectedExercise?.instructions}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ExercisesModal;
