import React from 'react';
import { FormControl } from '../ui/form-control';
import ThemedView from '../ThemedView/ThemedView';
import { Button, ButtonText } from '../ui/button';
import { Control } from 'react-hook-form';
import { TRegisterFormProps } from './RegisterContainer';
import FormInput from '../Form/FormInput';

type TRegisterProps = {
  control: Control<TRegisterFormProps>;
  handleSubmit: () => void;
};

const Register = ({ control, handleSubmit }: TRegisterProps) => {
  return (
    <ThemedView className="p-10">
      <FormControl className="flex gap-5">
        <FormInput
          label="Username"
          placeholder="Enter your user name"
          name="userName"
          autoFocus
          control={control}
        />

        <FormInput
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
          control={control}
        />

        <FormInput
          label="Email"
          placeholder="Enter your email"
          name="email"
          type="text"
          keyboardType="email-address"
          control={control}
        />
      </FormControl>
      <Button onPress={handleSubmit} className="mt-5">
        <ButtonText>Sign up</ButtonText>
      </Button>
    </ThemedView>
  );
};

export default Register;
