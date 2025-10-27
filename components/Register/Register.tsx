import React, { useState } from 'react';
import { FormControl } from '../ui/form-control';
import ThemedView from '../ThemedView/ThemedView';
import FormInput from '../Form/FormInput';
import { Button, ButtonText } from '../ui/button';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    console.log('submitting', { email, password });
  };

  return (
    <ThemedView className="p-10">
      <FormControl className="flex gap-5">
        <FormInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          type="text"
          autoFocus
          keyboardType="email-address"
        />
        <FormInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          type="password"
        />
      </FormControl>
      <Button onPress={handleSubmit} className="mt-5">
        <ButtonText>Sign up</ButtonText>
      </Button>
    </ThemedView>
  );
};

export default Register;
