import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'PrivacyPolicy'>;

export const PrivacyPolicyScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentBox}>
          <Text style={styles.title}>
            We securely protect your personal info and keep your data safe.
          </Text>
          
          <Text style={styles.paragraph}>
            PriceHacker is designed to help users compare product prices and find better deals. This Privacy Policy explains how we collect, use, and protect your information when you use the app. When you create an account using email, Google, or Apple login, we may collect basic account information such as your name and email address. This information is used to sync your saved products, price alerts, and preferences across your devices so you can access them anytime.
          </Text>
          
          <Text style={styles.paragraph}>
            When you use PriceHacker, we may collect usage data such as product links you paste, images or screenshots you upload, products you search for, items you save, and alerts you create. This information helps us identify products, compare prices across retailers, and provide relevant savings and recommendations. We may also collect limited device information such as device type, app version, region, and notification preferences to improve performance and user experience.
          </Text>
        </View>

        <Button 
          title="Accept&Continue" 
          onPress={() => navigation.goBack()} 
          style={styles.submitBtn} 
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 12,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    flexGrow: 1,
  },
  contentBox: {
    backgroundColor: '#161817',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#1E201F',
    marginBottom: 32,
    flex: 1,
  },
  title: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    marginBottom: 20,
  },
  paragraph: {
    color: colors.text.secondary,
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 16,
  },
  submitBtn: {
    marginTop: 'auto',
  },
});
