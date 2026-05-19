import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const savedData = [
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
    title: 'Vertex Premium Chrono',
    targetPrice: '$1,150',
    currentPrice: '$1,249',
    trend: '+8.6%',
    trendType: 'up',
    added: 'Added 3 days ago',
    icon: 'watch',
  },
  {
    id: '3',
    title: 'Vertex Premium Chrono',
    targetPrice: '$1,150',
    currentPrice: '$1,249',
    trend: '+8.6%',
    trendType: 'up',
    added: 'Added 3 days ago',
    icon: 'watch',
  },
  {
    id: '4',
    title: 'Vertex Premium Chrono',
    targetPrice: '$1,150',
    currentPrice: '$1,249',
    trend: '+8.6%',
    trendType: 'up',
    added: 'Added 3 days ago',
    icon: 'watch',
  },
];

export const SavedScreen = () => {
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
        <Text style={styles.headerTitle}>Save Products</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.savedList}>
          {savedData.map((item, index) => (
            <View key={index} style={styles.savedCard}>
              <View style={styles.cardHeader}>
                <View style={styles.iconBox}>
                  <Feather name={item.icon as any} size={24} color={colors.text.secondary} />
                </View>
                <View style={styles.cardHeaderInfo}>
                  <View style={styles.statusRow}>
                    <View style={styles.watchingBadge}>
                      <View style={styles.watchingDot} />
                      <Text style={styles.watchingText}>WATCHING</Text>
                    </View>
                    <Text style={styles.addedText}>{item.added}</Text>
                  </View>
                  <Text style={styles.productTitle} numberOfLines={1}>{item.title}</Text>
                </View>
                <TouchableOpacity style={styles.bookmarkBtn}>
                  <Feather name="bookmark" size={16} color={colors.text.primary} />
                </TouchableOpacity>
              </View>

              <View style={styles.priceRow}>
                <View style={styles.priceCol}>
                  <Text style={styles.priceLabel}>TARGET PRICE</Text>
                  <Text style={styles.targetPrice}>{item.targetPrice}</Text>
                </View>
                <View style={styles.priceCol}>
                  <Text style={styles.priceLabel}>CURRENT PRICE</Text>
                  <Text style={styles.currentPrice}>{item.currentPrice}</Text>
                </View>
                <View style={styles.trendCol}>
                  {getTrendIcon(item.trendType)}
                  <Text style={[styles.trendText, { color: getTrendColor(item.trendType) }]}>
                    {item.trendType !== 'stable' ? ' ' : ''}{item.trend}
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
                  <Feather name="trash-2" size={20} color={colors.text.primary} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
  headerTitle: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  savedList: {
    gap: 16,
  },
  savedCard: {
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
    paddingRight: 8,
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
  bookmarkBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#1E201F',
    padding: 8,
    borderRadius: 8,
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
  },
});
