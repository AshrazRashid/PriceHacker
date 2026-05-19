import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import { RootStackParamList } from './src/navigation/types';
import { SplashScreen } from './src/screens/SplashScreen';
import { SignInScreen } from './src/screens/SignInScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { VerificationScreen } from './src/screens/VerificationScreen';
import { MainTabs } from './src/navigation/MainTabs';
import { UploadScreen } from './src/screens/UploadScreen';
import { ProcessingScreen } from './src/screens/ProcessingScreen';
import { ResultsScreen } from './src/screens/ResultsScreen';
import { AlternativesScreen } from './src/screens/AlternativesScreen';
import { NoResultsScreen } from './src/screens/NoResultsScreen';
import { PriceComparisonListScreen } from './src/screens/PriceComparisonListScreen';
import { SetAlertScreen } from './src/screens/SetAlertScreen';
import { EditProfileScreen } from './src/screens/EditProfileScreen';
import { SecurityScreen } from './src/screens/SecurityScreen';
import { PrivacyPolicyScreen } from './src/screens/PrivacyPolicyScreen';
import { HelpSupportScreen } from './src/screens/HelpSupportScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { ConnectedAccountsScreen } from './src/screens/ConnectedAccountsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash" // Start at Splash, which goes to SignIn, then we can navigate to MainTabs. For testing, we can keep Splash -> SignIn.
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#121212' },
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Upload" component={UploadScreen} />
          <Stack.Screen name="Processing" component={ProcessingScreen} />
          <Stack.Screen name="Results" component={ResultsScreen} />
          <Stack.Screen name="Alternatives" component={AlternativesScreen} />
          <Stack.Screen name="NoResults" component={NoResultsScreen} />
          <Stack.Screen name="PriceComparisonList" component={PriceComparisonListScreen} />
          <Stack.Screen name="SetAlert" component={SetAlertScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="Security" component={SecurityScreen} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
          <Stack.Screen name="Terms" component={TermsScreen} />
          <Stack.Screen name="ConnectedAccounts" component={ConnectedAccountsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
