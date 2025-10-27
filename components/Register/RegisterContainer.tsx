import React, { useState } from 'react';
import Register from './Register';
import { useDispatch } from 'react-redux';
import { signUpUser } from '@/store/auth/authSlice';
import { AppDispatch } from '@/store';

const RegisterContainer = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async () => {
    try {
      await dispatch(signUpUser({ email, password, username: userName }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Register
      email={email}
      userName={userName}
      password={password}
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      setUserName={setUserName}
      setPassword={setPassword}
    />
  );
};

export default RegisterContainer;
