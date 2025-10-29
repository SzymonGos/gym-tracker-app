import { supabase } from '@/lib/supabase';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Exercise = {
  id: string;
  name: string;
  category: string | null;
  primary_muscle: string | null;
  equipment: string | null;
  instructions: string | null;
  created_at: string;
};
export interface ExerciseState {
  exercises: Exercise[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ExerciseState = {
  exercises: [],
  isLoading: false,
  error: null,
};

export const fetchExercises = createAsyncThunk(
  'exercises/fetchExercises',
  async () => {
    const { data } = await supabase.from('exercises').select('*').order('name');
    return data;
  }
);

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchExercises.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchExercises.fulfilled,
      (state, action: PayloadAction<Exercise[] | null>) => {
        state.isLoading = false;
        state.exercises = action.payload || [];
      }
    );
    builder.addCase(fetchExercises.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || null;
    });
  },
});

export default exercisesSlice.reducer;
