import React from 'react';
import { FormControl } from '../ui/form-control';
import ThemedView from '../ThemedView/ThemedView';
import FormInput from '../Form/FormInput';
import { Button, ButtonText } from '../ui/button';

type TRegisterProps = {
  email: string;
  userName: string;
  password: string;
  handleSubmit: () => void;
  setEmail: (email: string) => void;
  setUserName: (userName: string) => void;
  setPassword: (password: string) => void;
};

const Register = ({
  email,
  userName,
  password,
  handleSubmit,
  setEmail,
  setUserName,
  setPassword,
}: TRegisterProps) => {
  return (
    <ThemedView className="p-10">
      <FormControl className="flex gap-5">
        <FormInput
          label="Username"
          placeholder="Enter your user name"
          value={userName}
          onChangeText={userName => setUserName(userName)}
          type="text"
        />
        <FormInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={password => setPassword(password)}
          type="password"
        />
        <FormInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={email => setEmail(email)}
          type="text"
          autoFocus
          keyboardType="email-address"
        />
      </FormControl>
      <Button onPress={handleSubmit} className="mt-5">
        <ButtonText>Sign up</ButtonText>
      </Button>
    </ThemedView>
  );
};

export default Register;
