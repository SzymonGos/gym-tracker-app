import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import exercisesReducer from './exercises/exercisesSlice';

export const store = configureStore({
  reducer: {
    user: authReducer,
    exercises: exercisesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
