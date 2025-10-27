import React from 'react';
import { FormControlLabelText } from '../ui/form-control';
import { Input, InputField } from '../ui/input';
import ThemedView from '../ThemedView/ThemedView';

type TFormInputProps = {
  label: string;
  placeholder: string;
  type?: 'text' | 'password';
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  helperText?: string;
  autoFocus?: boolean;
  keyboardType?: 'email-address' | 'default';
};

const FormInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  type = 'text',
  autoFocus = false,
  keyboardType = 'default',
}: TFormInputProps) => {
  return (
    <ThemedView>
      <FormControlLabelText className="mb-4">{label}</FormControlLabelText>
      <Input>
        <InputField
          type={type}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
        />
      </Input>
    </ThemedView>
  );
};

export default FormInput;
