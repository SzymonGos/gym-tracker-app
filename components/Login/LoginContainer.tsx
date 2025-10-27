import React from 'react';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { signInUser } from '@/store/auth/authSlice';
import { useForm } from 'react-hook-form';

export type TLoginFormProps = {
  email: string;
  password: string;
};

const LoginContainer = () => {
  const { control, handleSubmit } = useForm<TLoginFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: TLoginFormProps) => {
    try {
      await dispatch(
        signInUser({ email: data.email, password: data.password })
      );
    } catch (error) {
      console.error(error);
    }
  };
  return <Login control={control} handleSubmit={handleSubmit(onSubmit)} />;
};

export default LoginContainer;
