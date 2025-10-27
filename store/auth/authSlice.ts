import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export interface UserState {
  user: User | null;
  session: any;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  session: null,
  isLoading: false,
};

export const signInUser = createAsyncThunk(
  'user/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return data.user;
  }
);
export const signUpUser = createAsyncThunk(
  'user/signUp',
  async ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username?: string;
  }) => {
    const { data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: username,
        },
      },
    });
    return data.user;
  }
);

export const signOutUser = createAsyncThunk('user/signOut', async () => {
  await supabase.auth.signOut();
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSession: (state, action) => {
      state.session = action.payload;
      state.user = action.payload?.user ?? null;
    },
    clearUser: state => {
      state.user = null;
      state.session = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })

      .addCase(signInUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })

      .addCase(signOutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(signOutUser.fulfilled, state => {
        state.isLoading = false;
        state.user = null;
        state.session = null;
      });
  },
});

export const { setUser, setSession, clearUser } = userSlice.actions;
export default userSlice.reducer;
