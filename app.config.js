export default {
  expo: {
    name: "MinimalGoogleSignIn",
    slug: "minimal-google-signin",
    version: "1.0.0",
    android: {
      package: "com.zekagen.playlearn",
      googleServicesFile: "./google-services.json",
    },
    plugins: [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-google-signin/google-signin",
    ],
  }
};
