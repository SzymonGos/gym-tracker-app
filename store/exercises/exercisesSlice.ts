import { createSlice } from '@reduxjs/toolkit';

export type Exercise = {
  id: string;
  name: string;
  category: string | null;
  primary_muscle: string | null;
  equipment: string | null;
  instructions: string | null;
  created_at: string;
};
export type ExerciseState = {
  exercises: Exercise[];
};

const initialState: ExerciseState = {
  exercises: [],
};

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {},
});

export default exercisesSlice.reducer;
