import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Processing'>;

export const ProcessingScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Results');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color={colors.text.secondary} />
        </TouchableOpacity>
        <Text style={styles.headerLogo}>PRICEHACKER</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.scannerContainer}>
          <View style={[styles.corner, styles.cornerTopLeft]} />
          <View style={[styles.corner, styles.cornerTopRight]} />
          <View style={[styles.corner, styles.cornerBottomLeft]} />
          <View style={[styles.corner, styles.cornerBottomRight]} />
          
          <View style={styles.scannerIconBox}>
            <MaterialCommunityIcons name="barcode-scan" size={64} color={colors.primary} />
            <View style={styles.scannerLine} />
          </View>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.title}>Searching stores.</Text>
          <Text style={styles.subtitle}>This takes a few seconds</Text>
        </View>

        <View style={styles.statusBox}>
          <View style={styles.statusIconContainer}>
            <MaterialCommunityIcons name="magnify-scan" size={20} color={colors.primary} />
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.statusTitle}>SCANNING</Text>
            <Text style={styles.statusText}>
              Comparing prices across <Text style={styles.statusTextBold}>50+ verified{'\n'}retailers</Text> in your region.
            </Text>
          </View>
        </View>

        <View style={styles.assistantBox}>
          <View style={styles.assistantLeft}>
            <View style={styles.pulseDot} />
            <Text style={styles.assistantText}>Hacker Assistant active</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  closeBtn: {
    padding: 4,
    marginLeft: -4,
  },
  headerLogo: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  scannerContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 48,
  },
  corner: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderColor: colors.primary,
  },
  cornerTopLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  cornerTopRight: {
    top: 0,
    right: 0,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  cornerBottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  cornerBottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  scannerIconBox: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(133, 206, 170, 0.1)',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  scannerLine: {
    position: 'absolute',
    width: '100%',
    height: 2,
    backgroundColor: colors.primary,
    top: '50%',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  statusBox: {
    backgroundColor: '#1E201F',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 24,
  },
  statusIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(133, 206, 170, 0.1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  statusContent: {
    flex: 1,
  },
  statusTitle: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  statusText: {
    color: colors.text.secondary,
    fontSize: 12,
    lineHeight: 18,
  },
  statusTextBold: {
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  assistantBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E201F',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '100%',
  },
  assistantLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pulseDot: {
    width: 8,
    height: 8,
    backgroundColor: colors.primary,
    borderRadius: 4,
    marginRight: 12,
  },
  assistantText: {
    color: colors.text.secondary,
    fontSize: 14,
  },
  cancelText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
