import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { Provider, useDispatch } from 'react-redux';
import { supabase } from '@/lib/supabaseClient';
import { store, AppDispatch } from '@/store';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { setSession } from '@/store/auth/authSlice';
import '@/global.css';
import { queryClient } from '@/lib/tanstackClient';
import { QueryClientProvider } from '@tanstack/react-query';

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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GluestackUIProvider mode="light">
          <AppContent />
        </GluestackUIProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default RootLayout;
