import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10 }}>Welcome to the Gym Tracker App</Text>
      <Link href="/login">
        <Text style={styles.link}>Login</Text>
      </Link>
      <Link href="/register">
        <Text style={styles.link}>Register</Text>
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginBottom: 10,
    textDecorationLine: 'none',
  },
});
