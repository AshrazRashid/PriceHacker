import { NavigatorScreenParams } from '@react-navigation/native';

export type MainTabParamList = {
  Home: undefined;
  Alerts: undefined;
  Saved: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Verification: { email: string };
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  Upload: undefined;
  Processing: undefined;
  Results: undefined;
  Alternatives: undefined;
  NoResults: undefined;
  PriceComparisonList: undefined;
  SetAlert: undefined;
  EditProfile: undefined;
  Security: undefined;
  PrivacyPolicy: undefined;
  HelpSupport: undefined;
  Terms: undefined;
  ConnectedAccounts: undefined;
};
