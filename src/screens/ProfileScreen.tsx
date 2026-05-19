import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [notifications, setNotifications] = useState(true);
  const [priceDropAlerts, setPriceDropAlerts] = useState(true);
  const [backInStockAlerts, setBackInStockAlerts] = useState(false);

  const renderSectionHeader = (title: string) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  const renderMenuItem = (title: string, icon: string, onPress: () => void) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <View style={styles.menuIconBox}>
          <Feather name={icon as any} size={16} color={colors.text.primary} />
        </View>
        <Text style={styles.menuItemTitle}>{title}</Text>
      </View>
      <Feather name="chevron-right" size={20} color={colors.text.secondary} />
    </TouchableOpacity>
  );

  const renderToggleItem = (title: string, icon: string, value: boolean, onValueChange: (val: boolean) => void) => (
    <View style={styles.menuItem}>
      <View style={styles.menuItemLeft}>
        <View style={styles.menuIconBox}>
          <Feather name={icon as any} size={16} color={colors.text.primary} />
        </View>
        <Text style={styles.menuItemTitle}>{title}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#2A2C2B', true: 'rgba(133, 206, 170, 0.5)' }}
        thumbColor={value ? colors.primary : '#A1A5A2'}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* User Info */}
        <View style={styles.userInfoRow}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' }} 
              style={styles.avatar} 
            />
          </View>
          <Text style={styles.userName}>Elena Vance</Text>
          <View style={styles.verifiedBadge}>
            <Feather name="check" size={12} color="#FFF" />
          </View>
          <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => navigation.navigate('EditProfile')}>
            <Feather name="edit" size={20} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

        {/* ACCOUNT */}
        {renderSectionHeader('ACCOUNT')}
        <View style={styles.sectionContainer}>
          {renderMenuItem('Connected Accounts', 'bell', () => navigation.navigate('ConnectedAccounts'))}
          {renderMenuItem('My Alerts', 'bell', () => {})}
          {renderMenuItem('Change Password', 'lock', () => navigation.navigate('Security'))}
        </View>

        {/* PREFERENCES */}
        {renderSectionHeader('PREFERENCES')}
        <View style={styles.sectionContainer}>
          {renderToggleItem('Notifications', 'settings', notifications, setNotifications)}
          {renderToggleItem('Price drop alerts', 'trending-down', priceDropAlerts, setPriceDropAlerts)}
          {renderToggleItem('Back in stock alerts', 'package', backInStockAlerts, setBackInStockAlerts)}
        </View>

        {/* SUPPORT */}
        {renderSectionHeader('SUPPORT')}
        <View style={styles.sectionContainer}>
          {renderMenuItem('Help center & Support', 'help-circle', () => navigation.navigate('HelpSupport'))}
          {renderMenuItem('Privacy policy', 'shield', () => navigation.navigate('PrivacyPolicy'))}
          {renderMenuItem('Terms', 'file-text', () => navigation.navigate('Terms'))}
        </View>

        {/* Log Out */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Feather name="log-out" size={16} color="#E55353" style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

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
  headerTitle: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2A2C2B',
    overflow: 'hidden',
    marginRight: 16,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userName: {
    color: colors.text.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  verifiedBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 12,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconBox: {
    width: 32,
    height: 32,
    backgroundColor: '#1E201F',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemTitle: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  logoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(229, 83, 83, 0.1)',
    height: 56,
    borderRadius: 12,
    marginTop: 16,
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    color: '#E55353',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
