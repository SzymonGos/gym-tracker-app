import React, { useState } from 'react';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { signInUser } from '@/store/auth/authSlice';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async () => {
    try {
      await dispatch(signInUser({ email, password }));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Login
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
