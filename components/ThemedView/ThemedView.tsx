import { View } from 'react-native';
import React from 'react';
import clsx from 'clsx';

type ThemedViewProps = {
  children: React.ReactNode;
  className?: string;
};

const ThemedView = ({ children, className }: ThemedViewProps) => {
  return <View className={clsx(className)}>{children}</View>;
};

export default ThemedView;
