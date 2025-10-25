import { View } from "react-native";
import React from "react";

type ThemedViewProps = {
  children: React.ReactNode;
};

const ThemedView = ({ children }: ThemedViewProps) => {
  return <View>{children}</View>;
};

export default ThemedView;
