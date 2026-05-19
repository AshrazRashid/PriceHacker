import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Alternatives'>;

const alternativeProducts = [
  {
    id: '1',
    title: 'Vertex Lite Pro',
    category: 'AUDIO TECHNOLOGY',
    price: '$89',
    originalPrice: '$134',
    badge: 'SAVE $45',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    badgeStyle: { backgroundColor: '#E55353' },
  },
  {
    id: '2',
    title: 'Swift Watch S2',
    category: 'WEARABLES',
    price: '$115',
    originalPrice: '$155',
    badge: '-25% OFF',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    badgeStyle: { backgroundColor: '#D97A5E' },
  },
  {
    id: '3',
    title: 'Optic Prime 35mm',
    category: 'PHOTOGRAPHY',
    price: '$299',
    originalPrice: '$419',
    badge: 'SAVE $120',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
    badgeStyle: { backgroundColor: '#D97A5E' },
  },
  {
    id: '4',
    title: 'Nomad Shell 40L',
    category: 'LIFESTYLE',
    price: '$142',
    originalPrice: '$180',
    badge: 'BEST VALUE',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    badgeStyle: { backgroundColor: '#D97A5E' },
  },
];

export const AlternativesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Similar Cheaper Options</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="dots-vertical" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <View>
            <Text style={styles.subtitle}>PERSONAL CONCIERGE</Text>
            <Text style={styles.title}>Found 12 Matches</Text>
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={16} color={colors.text.primary} />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Grid */}
        <View style={styles.grid}>
          {alternativeProducts.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.card}
              onPress={() => navigation.navigate('PriceComparisonList')}
            >
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
                <View style={[styles.badge, item.badgeStyle]}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.productTitle} numberOfLines={1}>{item.title}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Pro Tip Card */}
        <View style={styles.proTipCard}>
          <View style={styles.proTipBadge}>
            <Text style={styles.proTipBadgeText}>PRO TIP</Text>
          </View>
          <Text style={styles.proTipTitle}>
            The "Vertex Lite" is technically superior to the flagship model at 40% less cost.
          </Text>
          <Text style={styles.proTipText}>
            Our AI found that the drivers used in the Lite version are identical to the Premium model, only the casing material differs.
          </Text>
          <TouchableOpacity 
            style={styles.compareBtn}
            onPress={() => navigation.navigate('PriceComparisonList')}
          >
            <Text style={styles.compareBtnText}>Compare Specs</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 24 }} />
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
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E201F',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  filterText: {
    color: colors.text.primary,
    fontSize: 12,
    marginLeft: 6,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    width: '48%',
    backgroundColor: '#1E201F',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%',
    height: 140,
    position: 'relative',
    backgroundColor: '#0A0A0A',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 12,
  },
  category: {
    color: colors.text.secondary,
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  productTitle: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 6,
  },
  originalPrice: {
    color: colors.text.secondary,
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  proTipCard: {
    backgroundColor: '#1E201F',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#2A2C2B',
  },
  proTipBadge: {
    backgroundColor: 'rgba(133, 206, 170, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  proTipBadgeText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  proTipTitle: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 12,
  },
  proTipText: {
    color: colors.text.secondary,
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 24,
  },
  compareBtn: {
    backgroundColor: colors.primary,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  compareBtnText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
