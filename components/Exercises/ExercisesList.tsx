import { FlatList, Pressable, Text } from 'react-native';
import React from 'react';
import { Exercise } from '@/store/exercises/exercisesSlice';
import ThemedView from '../ThemedView/ThemedView';
import clsx from 'clsx';

type TExercisesListProps = {
  exercises: Exercise[];
  selectedExercises?: Exercise[];
  onPress: (exercise: Exercise) => void;
};

const ExercisesList = ({
  exercises,
  selectedExercises,
  onPress,
}: TExercisesListProps) => {
  return (
    <FlatList
      data={exercises}
      keyExtractor={item => item.id}
      renderItem={({ item }: { item: Exercise }) => (
        <Pressable
          onPress={() => onPress(item)}
          className="border-b border-gray-200"
        >
          <ThemedView
            className={clsx(
              'relative flex-row items-center mx-2 px-4 py-5 bg-zinc-500',
              selectedExercises?.includes(item) && '!bg-blue-500'
            )}
          >
            <Text className="ml-10 text-white">{item?.name}</Text>
          </ThemedView>
        </Pressable>
      )}
    />
  );
};

export default ExercisesList;
