# Minimal Google Sign-In Issue

## Issue:
- `DEVELOPER_ERROR` when trying to sign in with Google
- Error: "DEVELOPER_ERROR: Follow troubleshooting instructions at https://react-native-google-signin.github.io/docs/troubleshooting"

## Setup Steps:
1. `npm install`
2. Add your `google-services.json` file
3. Replace `YOUR_WEB_CLIENT_ID_HERE` in `app/_layout.tsx` with your actual webClientId
4. `npx expo prebuild --clean`
5. `npx expo run:android`

## Environment:
- Expo: 53.0.20
- React Native: 0.79.5
- @react-native-google-signin/google-signin: ^15.0.0
- @react-native-firebase/auth: ^22.4.0

## Firebase Setup:
- Google Sign-in method enabled in Firebase Console
- SHA-1 fingerprint added: 9B:B0:A7:45:BD:4E:6C:11:80:AA:B3:64:E5:8A:A5:8F:A4:04:71:53
- OAuth consent screen configured (External, In production)

## Steps to Reproduce:
1. Clone this repository
2. Add your `google-services.json` file
3. Replace placeholder webClientId with your actual one
4. Run the setup steps above
5. Tap "Google Sign-In" button
6. Select Google account
7. Observe DEVELOPER_ERROR

## Expected Behavior:
- Google Sign-In should work without DEVELOPER_ERROR
- User should be able to sign in successfully

## Actual Behavior:
- DEVELOPER_ERROR occurs immediately after selecting Google account
- Sign-in process fails
