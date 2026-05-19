import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const alertsData = [
  {
    id: '1',
    title: 'Vertex Premium Chrono',
    targetPrice: '$1,150',
    currentPrice: '$1,249',
    trend: '+8.6%',
    trendType: 'up',
    added: 'Added 3 days ago',
    icon: 'watch',
  },
  {
    id: '2',
    title: 'SonicFlow Wireless Max',
    targetPrice: '$349',
    currentPrice: '$355',
    trend: '-12.4%',
    trendType: 'down',
    added: 'Price dropped 12h ago',
    icon: 'headphones',
  },
  {
    id: '3',
    title: 'Lumina X100 Retro',
    targetPrice: '$890',
    currentPrice: '$1,020',
    trend: '- Stable',
    trendType: 'stable',
    icon: 'camera',
    added: 'Added 1 week ago',
  },
];

export const AlertsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const getTrendColor = (type: string) => {
    if (type === 'down') return colors.primary;
    if (type === 'up') return '#E55353';
    return colors.text.secondary;
  };

  const getTrendIcon = (type: string) => {
    if (type === 'down') return <MaterialCommunityIcons name="trending-down" size={14} color={colors.primary} />;
    if (type === 'up') return <MaterialCommunityIcons name="trending-up" size={14} color="#E55353" />;
    return null;
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Price Alerts</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.summarySection}>
          <View style={styles.summaryLeft}>
            <Text style={styles.summaryLabel}>REAL-TIME TRACKER</Text>
            <Text style={styles.summaryTitle}>
              Smart alerts for your{'\n'}
              <Text style={styles.summaryTitleAccent}>curated wishlist.</Text>
            </Text>
          </View>
          <View style={styles.activeAlertsBox}>
            <Text style={styles.activeAlertsLabel}>ACTIVE ALERTS</Text>
            <Text style={styles.activeAlertsCount}>12</Text>
          </View>
        </View>

        <View style={styles.alertsList}>
          {alertsData.map((alert) => (
            <View key={alert.id} style={styles.alertCard}>
              <View style={styles.cardHeader}>
                <View style={styles.iconBox}>
                  <Feather name={alert.icon as any} size={24} color={colors.text.secondary} />
                </View>
                <View style={styles.cardHeaderInfo}>
                  <View style={styles.statusRow}>
                    <View style={styles.watchingBadge}>
                      <View style={styles.watchingDot} />
                      <Text style={styles.watchingText}>WATCHING</Text>
                    </View>
                    <Text style={styles.addedText}>{alert.added}</Text>
                  </View>
                  <Text style={styles.productTitle} numberOfLines={1}>{alert.title}</Text>
                </View>
              </View>

              <View style={styles.priceRow}>
                <View style={styles.priceCol}>
                  <Text style={styles.priceLabel}>TARGET PRICE</Text>
                  <Text style={styles.targetPrice}>{alert.targetPrice}</Text>
                </View>
                <View style={styles.priceCol}>
                  <Text style={styles.priceLabel}>CURRENT PRICE</Text>
                  <Text style={styles.currentPrice}>{alert.currentPrice}</Text>
                </View>
                <View style={styles.trendCol}>
                  {getTrendIcon(alert.trendType)}
                  <Text style={[styles.trendText, { color: getTrendColor(alert.trendType) }]}>
                    {alert.trendType !== 'stable' ? ' ' : ''}{alert.trend}
                  </Text>
                </View>
              </View>

              <View style={styles.cardActions}>
                <TouchableOpacity 
                  style={styles.viewDetailsBtn}
                  onPress={() => navigation.navigate('Results')}
                >
                  <Text style={styles.viewDetailsText}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                  <MaterialCommunityIcons name="bell-outline" size={20} color={colors.text.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                  <Feather name="trash-2" size={20} color={colors.text.primary} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={28} color="#000" />
      </TouchableOpacity>
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
    paddingBottom: 100, // padding for fab
  },
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  summaryLeft: {
    flex: 1,
    paddingRight: 16,
  },
  summaryLabel: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },
  summaryTitle: {
    color: colors.text.primary,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  summaryTitleAccent: {
    color: colors.primary,
  },
  activeAlertsBox: {
    backgroundColor: '#1E201F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeAlertsLabel: {
    color: colors.text.secondary,
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  activeAlertsCount: {
    color: colors.text.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  alertsList: {
    gap: 16,
  },
  alertCard: {
    backgroundColor: '#161817',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E201F',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: '#1E201F',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardHeaderInfo: {
    flex: 1,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  watchingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(133, 206, 170, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  watchingDot: {
    width: 4,
    height: 4,
    backgroundColor: colors.primary,
    borderRadius: 2,
    marginRight: 4,
  },
  watchingText: {
    color: colors.primary,
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  addedText: {
    color: colors.text.secondary,
    fontSize: 10,
  },
  productTitle: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  priceCol: {
    flex: 1,
  },
  priceLabel: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  targetPrice: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  currentPrice: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  trendCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewDetailsBtn: {
    flex: 1,
    backgroundColor: 'rgba(133, 206, 170, 0.8)',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  viewDetailsText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  iconBtn: {
    width: 40,
    height: 40,
    backgroundColor: '#1E201F',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});
