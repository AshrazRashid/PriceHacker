import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Upload'>;

export const UploadScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Add Product</Text>
        </TouchableOpacity>
        <Text style={styles.headerLogo}>PRICEHACKER</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Hack the Price.</Text>
          <Text style={styles.subtitle}>
            Snap or upload any product and our AI{'\n'}
            concierge will find the absolute best deal.
          </Text>
        </View>

        <View style={styles.uploadBox}>
          <View style={styles.iconContainer}>
            <Ionicons name="camera" size={32} color={colors.primary} />
            <View style={styles.iconPlus}>
              <Ionicons name="add" size={12} color="#000" />
            </View>
          </View>
          <Text style={styles.uploadBoxTitle}>Upload screenshot or photo</Text>
          <Text style={styles.uploadBoxText}>
            We'll identify the product and find cheaper{'\n'}
            options across 1,000+ verified retailers.
          </Text>
          
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.actionSection}>
          <TouchableOpacity 
            style={styles.primaryBtn}
            onPress={() => navigation.navigate('Processing')}
          >
            <Ionicons name="camera-outline" size={20} color="#000" style={styles.btnIcon} />
            <Text style={styles.primaryBtnText}>Use Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn}>
            <Ionicons name="images-outline" size={20} color={colors.primary} style={styles.btnIcon} />
            <Text style={styles.secondaryBtnText}>Upload From Gallery</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tipBox}>
          <MaterialCommunityIcons name="lightbulb-outline" size={24} color={colors.primary} style={styles.tipIcon} />
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>Concierge Tip</Text>
            <Text style={styles.tipText}>
              Clear photos of the price tag or brand name{'\n'}
              help our AI find discounts up to 40% faster.
            </Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  headerLogo: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  titleSection: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  uploadBox: {
    backgroundColor: '#161817',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1E201F',
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#1E2B25',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  iconPlus: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBoxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 12,
  },
  uploadBoxText: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 24,
    height: 4,
    backgroundColor: '#2A2C2B',
    borderRadius: 2,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: colors.primary,
  },
  actionSection: {
    marginBottom: 24,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  btnIcon: {
    marginRight: 8,
  },
  primaryBtnText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryBtn: {
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  secondaryBtnText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  tipBox: {
    backgroundColor: '#161817',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#1E201F',
  },
  tipIcon: {
    marginRight: 16,
    marginTop: 2,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tipText: {
    color: colors.text.secondary,
    fontSize: 12,
    lineHeight: 18,
  },
});
