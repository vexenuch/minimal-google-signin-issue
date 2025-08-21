import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth';
import { Button, Alert, View } from 'react-native';

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const signInResult = await GoogleSignin.signIn();
      
      const idToken = signInResult.data?.idToken || signInResult.idToken;
      if (!idToken) {
        throw new Error('No ID token found');
      }
      
      const googleCredential = GoogleAuthProvider.credential(idToken);
      const response = await signInWithCredential(getAuth(), googleCredential);
      console.log('Signed in with Google!', response.user);
      Alert.alert('Success', 'Signed in with Google!');
    } catch (error: any) {
      console.error('Google Sign-In Error:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Google Sign-In" onPress={handleGoogleLogin} />
    </View>
  );
}
