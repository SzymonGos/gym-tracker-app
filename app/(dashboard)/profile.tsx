import { Text } from 'react-native';
import React from 'react';
import ThemedView from '@/components/ThemedView/ThemedView';
import { supabase } from '@/lib/supabaseClient';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      return data;
    },
  });

  return (
    <ThemedView isSafeArea>
      <Text>Welcome {user?.user?.user_metadata.display_name}</Text>
      <Text>Email: {user?.user?.email}</Text>
    </ThemedView>
  );
};

export default Profile;
