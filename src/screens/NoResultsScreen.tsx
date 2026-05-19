import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'NoResults'>;

export const NoResultsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Search Results</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name="magnify-close" size={64} color={colors.primary} />
          </View>
          <View style={styles.floatingBox}>
            <MaterialCommunityIcons name="package-variant-closed" size={16} color="#000" />
          </View>
        </View>

        <Text style={styles.title}>No exact matches found</Text>
        <Text style={styles.subtitle}>
          Here are similar cheaper options we{'\n'}hacked for you.
        </Text>

        <TouchableOpacity 
          style={styles.actionBtn}
          onPress={() => navigation.navigate('Alternatives')}
        >
          <Text style={styles.actionBtnText}>View Alternatives</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingBottom: 64, // offset for visual center
  },
  iconWrapper: {
    position: 'relative',
    marginBottom: 40,
  },
  iconBox: {
    width: 120,
    height: 120,
    backgroundColor: '#1E201F',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingBox: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 32,
    height: 32,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  actionBtn: {
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  actionBtnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
