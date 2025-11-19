import { supabase } from '@/lib/supabaseClient';
import { Exercise } from '@/store/exercises/exercisesSlice';
import { useQuery } from '@tanstack/react-query';

export const useExercises = () => {
  return useQuery({
    queryKey: ['exercises'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('exercises')
        .select('*')
        .order('name');
      if (error) throw error;
      return data as Exercise[];
    },
  });
};
