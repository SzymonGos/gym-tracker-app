import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { Provider, useDispatch } from 'react-redux';
import { supabase } from '@/lib/supabase';
import { store, AppDispatch } from '@/store';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { setSession } from '@/store/auth/authSlice';
import '@/global.css';

const AppContent = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session));
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <Provider store={store}>
      <GluestackUIProvider mode="dark">
        <AppContent />
      </GluestackUIProvider>
    </Provider>
  );
};

export default RootLayout;
