import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'PriceComparisonList'>;

type FilterType = 'Lowest Price' | 'Fast Shipping' | 'Best Value';

const storesData = [
  {
    id: '1',
    name: 'eBay',
    condition: 'Refurbished',
    price: 1105.00,
    shippingText: 'FREE SHIPPING',
    shippingSpeed: 3,
    inStock: false,
    lowestBadge: 'LOWEST PRICE',
    fastBadge: null,
    valueBadge: null,
    iconProvider: 'MaterialCommunityIcons',
    iconName: 'check-decagram',
    valueScore: 2,
  },
  {
    id: '2',
    name: 'Amazon',
    condition: 'New',
    price: 1249.00,
    shippingText: 'FREE SHIPPING',
    shippingSpeed: 2,
    inStock: true,
    lowestBadge: null,
    fastBadge: null,
    valueBadge: 'BEST VALUE',
    iconProvider: 'Feather',
    iconName: 'shopping-bag',
    valueScore: 1,
  },
  {
    id: '3',
    name: 'Best Buy',
    condition: 'Used',
    price: 1299.99,
    shippingText: '+$12.00 SHIPPING',
    shippingSpeed: 4,
    inStock: true,
    lowestBadge: null,
    fastBadge: null,
    valueBadge: null,
    iconProvider: 'MaterialCommunityIcons',
    iconName: 'storefront-outline',
    valueScore: 4,
  },
  {
    id: '4',
    name: 'Walmart',
    condition: 'New',
    price: 1350.00,
    shippingText: 'FREE 2-DAY SHIPPING',
    shippingSpeed: 1,
    inStock: false,
    lowestBadge: null,
    fastBadge: 'FASTEST SHIPPING',
    valueBadge: null,
    iconProvider: 'MaterialCommunityIcons',
    iconName: 'home-outline',
    valueScore: 3,
  },
];

export const PriceComparisonListScreen: React.FC<Props> = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Lowest Price');

  const sortedStores = useMemo(() => {
    let sorted = [...storesData];
    if (activeFilter === 'Lowest Price') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (activeFilter === 'Fast Shipping') {
      sorted.sort((a, b) => a.shippingSpeed - b.shippingSpeed);
    } else if (activeFilter === 'Best Value') {
      sorted.sort((a, b) => a.valueScore - b.valueScore);
    }
    return sorted;
  }, [activeFilter]);

  const renderIcon = (provider: string, name: string) => {
    if (provider === 'Feather') {
      return <Feather name={name as any} size={20} color={colors.text.secondary} />;
    }
    return <MaterialCommunityIcons name={name as any} size={20} color={colors.text.secondary} />;
  };

  const getActiveBadge = (store: typeof storesData[0]) => {
    if (activeFilter === 'Lowest Price' && store.lowestBadge) return store.lowestBadge;
    if (activeFilter === 'Fast Shipping' && store.fastBadge) return store.fastBadge;
    if (activeFilter === 'Best Value' && store.valueBadge) return store.valueBadge;
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Vertex Premium Chrono</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Product Image Section */}
        <View style={styles.imageCard}>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>WATCHES</Text>
          </View>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80' }} 
            style={styles.productImage} 
            resizeMode="contain"
          />
        </View>

        {/* Product Details Section */}
        <View style={styles.productDetails}>
          <View style={styles.productDetailsLeft}>
            <Text style={styles.productTitle}>Premium Chrono</Text>
            <View style={styles.tagsRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>ROLEX</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>MP45</Text>
              </View>
            </View>
          </View>
          <View style={styles.productDetailsRight}>
            <Text style={styles.startsAtText}>Starts at</Text>
            <Text style={styles.startsAtPrice}>$1,249.00</Text>
          </View>
        </View>

        {/* Filters */}
        <View style={styles.filtersRow}>
          {(['Lowest Price', 'Fast Shipping', 'Best Value'] as FilterType[]).map((filter) => (
            <TouchableOpacity 
              key={filter} 
              style={[styles.filterPill, activeFilter === filter && styles.filterPillActive]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Stores List */}
        <View style={styles.storesList}>
          {sortedStores.map((store) => {
            const activeBadge = getActiveBadge(store);
            const isFreeShipping = store.shippingText.includes('FREE');

            return (
              <View key={store.id} style={styles.storeCard}>
                <View style={styles.storeCardTop}>
                  <View style={styles.storeIconContainer}>
                    {renderIcon(store.iconProvider, store.iconName)}
                  </View>
                  <View style={styles.storeInfo}>
                    <View style={styles.storeNameRow}>
                      <Text style={styles.storeName}>{store.name}</Text>
                      {activeBadge && (
                        <View style={styles.storeBadge}>
                          <Text style={styles.storeBadgeText}>{activeBadge}</Text>
                        </View>
                      )}
                    </View>
                    <Text style={styles.storeCondition}>{store.condition}</Text>
                  </View>
                  <View style={styles.storePriceBox}>
                    <Text style={styles.storePrice}>
                      ${store.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </Text>
                    <Text style={[styles.shippingText, isFreeShipping && styles.freeShippingText]}>
                      {store.shippingText}
                    </Text>
                  </View>
                </View>

                <View style={styles.storeCardBottom}>
                  <TouchableOpacity style={styles.viewDealBtn}>
                    <Text style={styles.viewDealBtnText}>View Deal</Text>
                  </TouchableOpacity>
                  <Text style={[styles.stockText, store.inStock ? styles.inStock : styles.outOfStock]}>
                    {store.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        
        {/* Padding for bottom bar */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.actionBtn}>
          <MaterialCommunityIcons name="bell-outline" size={20} color={colors.text.primary} />
          <Text style={styles.actionBtnText}>Set Alert</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyNowBtn}>
          <MaterialCommunityIcons name="cart-outline" size={20} color="#000" />
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Feather name="shopping-bag" size={20} color={colors.text.primary} />
          <Text style={styles.actionBtnText}>View Deal</Text>
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
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.text.secondary,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 12,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  imageCard: {
    width: '100%',
    height: 240,
    backgroundColor: '#0A0A0A',
    borderRadius: 20,
    position: 'relative',
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  badgeText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  productImage: {
    width: '70%',
    height: '70%',
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  productDetailsLeft: {
    flex: 1,
  },
  productTitle: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tagsRow: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  tagText: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  productDetailsRight: {
    alignItems: 'flex-end',
  },
  startsAtText: {
    color: colors.text.secondary,
    fontSize: 10,
    marginBottom: 4,
  },
  startsAtPrice: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  filterPill: {
    flex: 1,
    backgroundColor: '#1E201F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  filterPillActive: {
    backgroundColor: 'rgba(133, 206, 170, 0.1)',
  },
  filterText: {
    color: colors.text.secondary,
    fontSize: 12,
    fontWeight: '600',
  },
  filterTextActive: {
    color: colors.primary,
  },
  storesList: {
    gap: 16,
  },
  storeCard: {
    backgroundColor: '#161817',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E201F',
  },
  storeCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  storeIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#2A2C2B',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  storeInfo: {
    flex: 1,
  },
  storeNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  storeName: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  storeBadge: {
    backgroundColor: '#D97A5E',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  storeBadgeText: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: 'bold',
  },
  storeCondition: {
    color: colors.text.secondary,
    fontSize: 12,
  },
  storePriceBox: {
    alignItems: 'flex-end',
  },
  storePrice: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  shippingText: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  freeShippingText: {
    color: colors.primary,
  },
  storeCardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewDealBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2A2C2B',
  },
  viewDealBtnText: {
    color: colors.text.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  stockText: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  inStock: {
    color: 'rgba(133, 206, 170, 0.5)',
  },
  outOfStock: {
    color: colors.text.secondary,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#0A0A0A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32, // for safe area
    borderTopWidth: 1,
    borderTopColor: '#1E201F',
  },
  actionBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  actionBtnText: {
    color: colors.text.primary,
    fontSize: 12,
    marginTop: 6,
    fontWeight: '500',
  },
  buyNowBtn: {
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    flex: 1,
    marginHorizontal: 16,
  },
  buyNowText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
