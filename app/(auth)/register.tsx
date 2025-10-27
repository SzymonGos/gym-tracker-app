import React, { use, useState } from 'react';
import Register from '@/components/Register/Register';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <Register />;
};

export default RegisterPage;
