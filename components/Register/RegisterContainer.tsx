import React from 'react';
import Register from './Register';
import { useDispatch } from 'react-redux';
import { signUpUser } from '@/store/auth/authSlice';
import { AppDispatch } from '@/store';
import { useForm } from 'react-hook-form';

export type TRegisterFormProps = {
  email: string;
  userName: string;
  password: string;
};

const RegisterContainer = () => {
  const { control, handleSubmit } = useForm<TRegisterFormProps>({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: TRegisterFormProps) => {
    try {
      await dispatch(
        signUpUser({
          email: data.email,
          password: data.password,
          username: data.userName,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return <Register control={control} handleSubmit={handleSubmit(onSubmit)} />;
};

export default RegisterContainer;
