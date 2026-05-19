import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Button } from '../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Security'>;

export const SecurityScreen: React.FC<Props> = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Security</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Change Password</Text>
          <Text style={styles.subtitle}>Update your credentials to stay protected.</Text>

          <View style={styles.formContainer}>
            {/* Current Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CURRENT PASSWORD</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                  secureTextEntry
                  placeholder="••••••••"
                  placeholderTextColor={colors.text.secondary}
                />
                <Feather name="eye-off" size={20} color={colors.text.secondary} />
              </View>
              <TouchableOpacity style={styles.forgotBtn}>
                <Text style={styles.forgotText}>Forgot Current Password?</Text>
              </TouchableOpacity>
            </View>

            {/* New Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>NEW PASSWORD</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry
                  placeholder="Create new password"
                  placeholderTextColor={colors.text.secondary}
                />
                <Feather name="eye" size={20} color={colors.text.secondary} />
              </View>
              
              <View style={styles.strengthBarContainer}>
                <View style={[styles.strengthBar, { width: '33%', backgroundColor: '#E55353' }]} />
                <View style={[styles.strengthBar, { width: '33%', backgroundColor: '#D97A5E' }]} />
                <View style={[styles.strengthBar, { width: '33%', backgroundColor: '#2A2C2B' }]} />
              </View>
              <Text style={styles.strengthText}>Weak</Text>

              <View style={styles.requirementsList}>
                <View style={styles.requirementRow}>
                  <Ionicons name="checkmark-circle" size={16} color={colors.primary} />
                  <Text style={[styles.requirementText, styles.requirementMet]}>8+ characters</Text>
                </View>
                <View style={styles.requirementRow}>
                  <Ionicons name="ellipse-outline" size={16} color={colors.text.secondary} />
                  <Text style={styles.requirementText}>1 number</Text>
                </View>
                <View style={styles.requirementRow}>
                  <Ionicons name="ellipse-outline" size={16} color={colors.text.secondary} />
                  <Text style={styles.requirementText}>1 special character</Text>
                </View>
              </View>
            </View>

            {/* Confirm Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CONFIRM NEW PASSWORD</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  placeholder="Repeat new password"
                  placeholderTextColor={colors.text.secondary}
                />
                <Feather name="eye" size={20} color={colors.text.secondary} />
              </View>
              <View style={styles.matchRow}>
                <Feather name="refresh-ccw" size={12} color={colors.text.secondary} style={styles.matchIcon} />
                <Text style={styles.matchText}>Passwords match</Text>
              </View>
            </View>
          </View>

          <Button 
            title="Save" 
            onPress={() => navigation.goBack()} 
            style={styles.submitBtn} 
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
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
  title: {
    color: colors.text.primary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: 14,
    marginBottom: 32,
  },
  formContainer: {
    backgroundColor: '#161817',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E201F',
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2C2B',
    paddingBottom: 8,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    color: colors.text.primary,
    fontSize: 14,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '500',
  },
  strengthBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    gap: 4,
  },
  strengthBar: {
    height: 4,
    borderRadius: 2,
    flex: 1,
  },
  strengthText: {
    color: '#E55353',
    fontSize: 10,
    marginBottom: 16,
  },
  requirementsList: {
    gap: 8,
  },
  requirementRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requirementText: {
    color: colors.text.secondary,
    fontSize: 12,
    marginLeft: 8,
  },
  requirementMet: {
    color: colors.primary,
  },
  matchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  matchIcon: {
    marginRight: 6,
  },
  matchText: {
    color: colors.text.secondary,
    fontSize: 12,
  },
  submitBtn: {
    marginTop: 'auto',
  },
});
