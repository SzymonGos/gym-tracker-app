import React from 'react';
import { FormControlLabelText } from '../ui/form-control';
import { Input, InputField } from '../ui/input';
import ThemedView from '../ThemedView/ThemedView';
import { Control, Controller } from 'react-hook-form';

type TFormInputProps = {
  label: string;
  placeholder: string;
  type?: 'text' | 'password';
  error?: string;
  helperText?: string;
  autoFocus?: boolean;
  keyboardType?: 'email-address' | 'default';
  control: Control<any>;
  name: string;
};

const FormInput = ({
  name,
  label,
  placeholder,
  type = 'text',
  control,
  autoFocus = false,
  keyboardType = 'default',
}: TFormInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <ThemedView>
          <FormControlLabelText className="mb-4">{label}</FormControlLabelText>
          <Input>
            <InputField
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              type={type}
              autoFocus={autoFocus}
              keyboardType={keyboardType}
            />
          </Input>
        </ThemedView>
      )}
    />
  );
};

export default FormInput;
