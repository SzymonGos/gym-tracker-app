import React from 'react';
import { FormControl } from '../ui/form-control';
import FormInput from '../Form/FormInput';
import { Button, ButtonText } from '../ui/button';

type TLoginProps = {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: () => Promise<void>;
};

const Login = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
}: TLoginProps) => {
  return (
    <FormControl className="flex gap-5">
      <FormInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={email => setEmail(email)}
        keyboardType="email-address"
      />
      <FormInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={password => setPassword(password)}
        type="password"
      />
      <Button onPress={handleSubmit} className="mt-5">
        <ButtonText>Login</ButtonText>
      </Button>
    </FormControl>
  );
};

export default Login;
