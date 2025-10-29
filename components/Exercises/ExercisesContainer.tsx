import React, { useEffect } from 'react';
import Exercises from './Exercises';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import ThemedView from '../ThemedView/ThemedView';
import { ActivityIndicator, Text } from 'react-native';
import { fetchExercises } from '@/store/exercises/exercisesSlice';

const ExercisesContainer = () => {
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
  return <Exercises exercises={exercises} />;
};

export default ExercisesContainer;
