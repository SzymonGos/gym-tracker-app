import { View } from 'react-native';
import React from 'react';
import { clsx } from 'clsx';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ThemedViewProps = {
  children: React.ReactNode;
  className?: string;
  isSafeArea?: boolean;
};

const ThemedView = ({
  children,
  className,
  isSafeArea = false,
}: ThemedViewProps) => {
  const insets = useSafeAreaInsets();

  if (isSafeArea) {
    return (
      <View
        style={{
          paddingTop: isSafeArea ? insets.top : 0,
          paddingBottom: isSafeArea ? insets.bottom : 0,
        }}
        className={clsx(className)}
      >
        {children}
      </View>
    );
  }

  return <View className={clsx(className)}>{children}</View>;
};

export default ThemedView;
