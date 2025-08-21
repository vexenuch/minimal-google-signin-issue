import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "YOUR_WEB_CLIENT_ID_HERE", // Replace with your actual webClientId
    });
  }, []);

  return (
    <Stack>
      <Stack.Screen name="loginpage" options={{ headerShown: false }} />
    </Stack>
  );
}
