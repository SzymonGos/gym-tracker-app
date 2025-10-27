import { Button, ButtonText } from '@/components/ui/button';
import { AppDispatch, RootState } from '@/store';
import { signOutUser } from '@/store/auth/authSlice';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  if (!user.session && !user.user) {
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
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10 }}>
        Welcome{' '}
        {user.session.user.user_metadata.display_name ||
          user.session.user.email}
      </Text>

      <Link href="/login">
        <Text style={styles.link}>Login</Text>
      </Link>
      <Link href="/register">
        <Text style={styles.link}>Register</Text>
      </Link>
      <Button onPress={() => dispatch(signOutUser())}>
        <ButtonText>Logout</ButtonText>
      </Button>
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
