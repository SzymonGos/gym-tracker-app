import React from 'react';
import { FormControl } from '../ui/form-control';
import FormInput from '../Form/FormInput';
import { Button, ButtonText } from '../ui/button';
import { Control } from 'react-hook-form';
import { TLoginFormProps } from './LoginContainer';

type TLoginProps = {
  control: Control<TLoginFormProps>;
  handleSubmit: () => Promise<void>;
};

const Login = ({ control, handleSubmit }: TLoginProps) => {
  return (
    <FormControl className="flex gap-5">
      <FormInput
        label="Email"
        placeholder="Enter your email"
        name="email"
        control={control}
        keyboardType="email-address"
      />
      <FormInput
        label="Password"
        placeholder="Enter your password"
        name="password"
        control={control}
        type="password"
      />
      <Button onPress={handleSubmit} className="mt-5">
        <ButtonText>Login</ButtonText>
      </Button>
    </FormControl>
  );
};

export default Login;
