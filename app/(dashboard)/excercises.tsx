import { ActivityIndicator, FlatList, Text } from 'react-native';
import React, { useEffect } from 'react';
import ThemedView from '@/components/ThemedView/ThemedView';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { Exercise, fetchExercises } from '@/store/exercises/exercisesSlice';

const Excercises = () => {
  const { exercises, isLoading, error } = useSelector(
    (state: RootState) => state.exercises
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  if (isLoading) {
    return (
      <ThemedView isSafeArea>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }
  if (error) {
    return (
      <ThemedView isSafeArea>
        <Text>Error: {error}</Text>
      </ThemedView>
    );
  }

  return (
    <ThemedView isSafeArea>
      <Text>{exercises.length}</Text>
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

export default Excercises;
