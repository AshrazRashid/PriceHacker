import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'ConnectedAccounts'>;

export const ConnectedAccountsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Connected Accounts</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.listContainer}>
          {/* Google */}
          <View style={styles.accountRow}>
            <View style={styles.accountLeft}>
              <View style={styles.iconBox}>
                <Ionicons name="logo-google" size={16} color="#DB4437" />
              </View>
              <Text style={styles.accountName}>Google</Text>
            </View>
            <TouchableOpacity style={styles.badgeConnected}>
              <Text style={styles.badgeConnectedText}>Connected</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Apple */}
          <View style={styles.accountRow}>
            <View style={styles.accountLeft}>
              <View style={styles.iconBox}>
                <Ionicons name="logo-apple" size={18} color="#FFF" />
              </View>
              <Text style={styles.accountName}>Apple</Text>
            </View>
            <TouchableOpacity style={styles.badgeConnect}>
              <Text style={styles.badgeConnectText}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },
  listContainer: {
    backgroundColor: '#161817',
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#1E201F',
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  accountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  accountName: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  badgeConnected: {
    backgroundColor: 'rgba(133, 206, 170, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(133, 206, 170, 0.2)',
  },
  badgeConnectedText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeConnect: {
    backgroundColor: '#1E201F',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2C2B',
  },
  badgeConnectText: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#1E201F',
  },
});
