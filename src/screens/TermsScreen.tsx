import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Terms'>;

export const TermsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentBox}>
          <Text style={styles.sectionTitle}>1.No Direct Selling</Text>
          <Text style={styles.paragraph}>
            PriceHacker does not sell products or process payments. Purchases are made on external retailer websites.
          </Text>

          <Text style={styles.sectionTitle}>2.Third-Party Retailers</Text>
          <Text style={styles.paragraph}>
            PriceHacker does not sell products or process payments. Purchases are made on external retailer websites.
          </Text>

          <Text style={styles.sectionTitle}>3.Price Accuracy</Text>
          <Text style={styles.paragraph}>
            Prices and availability may change. Users should verify details before making a purchase.
          </Text>

          <Text style={styles.sectionTitle}>4. Account Responsibility</Text>
          <Text style={styles.paragraph}>
            You are responsible for keeping your account information secure.
          </Text>
        </View>

        <Button 
          title="I agree" 
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
  sectionTitle: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  paragraph: {
    color: colors.text.secondary,
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 24,
  },
  submitBtn: {
    marginTop: 'auto',
  },
});
