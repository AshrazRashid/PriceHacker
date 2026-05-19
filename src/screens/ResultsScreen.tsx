import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Feather, FontAwesome } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Results'>;

export const ResultsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Best Price Found</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Product Image Card */}
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

        {/* Title & Actions */}
        <View style={styles.titleRow}>
          <Text style={styles.productTitle}>Vertex Premium Chrono</Text>
          <TouchableOpacity style={styles.bookmarkBtn}>
            <Feather name="bookmark" size={20} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

        {/* Tags */}
        <View style={styles.tagsRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>ROLEX</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>WATCHES</Text>
          </View>
        </View>

        {/* Price Box */}
        <View style={styles.priceBox}>
          <View style={styles.priceBoxLeft}>
            <Text style={styles.priceBoxSubtitle}>YOU'RE ABOUT TO PAY $132</Text>
            <Text style={styles.priceBoxTitle}>BEST PRICE FOUND</Text>
            <Text style={styles.priceValue}>$132</Text>
          </View>
          <View style={styles.priceBoxRight}>
            <View style={styles.trackingPill}>
              <View style={styles.trackingDot} />
              <Text style={styles.trackingText}>Price tracking</Text>
            </View>
            <Text style={styles.saveText}>Save $48 (27%)</Text>
          </View>
        </View>

        {/* Market Comparison */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>MARKET COMPARISON</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PriceComparisonList')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.comparisonList}>
          {/* Amazon */}
          <TouchableOpacity 
            style={styles.comparisonCard}
            onPress={() => navigation.navigate('PriceComparisonList')}
          >
            <View style={styles.comparisonIcon}>
              <Feather name="shopping-bag" size={20} color={colors.text.secondary} />
            </View>
            <View style={styles.comparisonInfo}>
              <Text style={styles.storeName}>Amazon</Text>
              <Text style={styles.storeDetails}>Free Shipping • New</Text>
            </View>
            <View style={styles.comparisonPriceBox}>
              <Text style={styles.storePrice}>$132</Text>
              <Text style={styles.matchedText}>MATCHED</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.text.secondary} />
          </TouchableOpacity>

          {/* eBay */}
          <TouchableOpacity style={styles.comparisonCard}>
            <View style={styles.comparisonIcon}>
              <MaterialCommunityIcons name="storefront-outline" size={20} color={colors.text.secondary} />
            </View>
            <View style={styles.comparisonInfo}>
              <Text style={styles.storeName}>eBay</Text>
              <Text style={styles.storeDetails}>+$5.99 Shipping • New</Text>
            </View>
            <View style={styles.comparisonPriceBox}>
              <Text style={styles.storePrice}>$145</Text>
              <Text style={styles.diffText}>+$13 DIFF</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.text.secondary} />
          </TouchableOpacity>

          {/* Walmart */}
          <TouchableOpacity style={styles.comparisonCard}>
            <View style={styles.comparisonIcon}>
              <Feather name="shopping-bag" size={20} color={colors.text.secondary} />
            </View>
            <View style={styles.comparisonInfo}>
              <Text style={styles.storeName}>Walmart</Text>
              <Text style={styles.storeDetails}>Free Shipping • Used</Text>
            </View>
            <View style={styles.comparisonPriceBox}>
              <Text style={styles.storePrice}>$152</Text>
              <Text style={styles.diffText}>+$20 DIFF</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

        {/* Similar Alternatives */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>SIMILAR CHEAPER ALTERNATIVES</Text>
          <MaterialCommunityIcons name="compare-horizontal" size={16} color={colors.primary} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.alternativesList}>
          <TouchableOpacity 
            style={styles.altCard}
            onPress={() => navigation.navigate('Alternatives')}
          >
            <View style={styles.altImageContainer}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=500&q=80' }} 
                style={styles.altImage} 
              />
            </View>
            <Text style={styles.altSubtitle}>VERTEX CORE</Text>
            <Text style={styles.altPrice}>$89</Text>
            <View style={styles.altSaveBadge}>
              <MaterialCommunityIcons name="trending-down" size={12} color={colors.primary} />
              <Text style={styles.altSaveText}>Save $43</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.altCard}
            onPress={() => navigation.navigate('Alternatives')}
          >
            <View style={styles.altImageContainer}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80' }} 
                style={styles.altImage} 
              />
            </View>
            <Text style={styles.altSubtitle}>SPORT LITE</Text>
            <Text style={styles.altPrice}>$105</Text>
            <View style={styles.altSaveBadge}>
              <MaterialCommunityIcons name="trending-down" size={12} color={colors.primary} />
              <Text style={styles.altSaveText}>Save $27</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        {/* Padding for bottom bar */}
        <View style={{ height: 160 }} />
      </ScrollView>

      {/* Floating Action Bar */}
      <View style={styles.floatingActions}>
        <TouchableOpacity 
          style={styles.circularActionBtn}
          onPress={() => navigation.navigate('SetAlert')}
        >
          <MaterialCommunityIcons name="bell-outline" size={20} color={colors.text.primary} />
          <Text style={styles.circularActionText}>Set Alert</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buyNowBtn}
          onPress={() => navigation.navigate('PriceComparisonList')}
        >
          <MaterialCommunityIcons name="cart-outline" size={20} color="#000" />
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.circularActionBtn}
          onPress={() => navigation.navigate('PriceComparisonList')}
        >
          <Feather name="shopping-bag" size={20} color={colors.text.primary} />
          <Text style={styles.circularActionText}>View Deal</Text>
        </TouchableOpacity>
      </View>

      {/* Faux Tab Bar */}
      <View style={styles.fauxTabBar}>
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}
        >
          <Ionicons name="home" size={20} color={colors.primary} />
          <Text style={[styles.tabLabel, { color: colors.primary }]}>HOME</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => navigation.navigate('MainTabs', { screen: 'Alerts' })}
        >
          <Ionicons name="notifications" size={20} color={colors.text.secondary} />
          <Text style={styles.tabLabel}>ALERTS</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => navigation.navigate('MainTabs', { screen: 'Saved' })}
        >
          <Ionicons name="bookmark" size={20} color={colors.text.secondary} />
          <Text style={styles.tabLabel}>SAVED</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => navigation.navigate('MainTabs', { screen: 'Profile' })}
        >
          <FontAwesome name="user" size={20} color={colors.text.secondary} />
          <Text style={styles.tabLabel}>PROFILE</Text>
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
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 12,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  imageCard: {
    width: '100%',
    height: 300,
    backgroundColor: '#0A0A0A',
    borderRadius: 20,
    position: 'relative',
    marginBottom: 20,
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
    width: '80%',
    height: '80%',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text.primary,
    flex: 1,
  },
  bookmarkBtn: {
    width: 36,
    height: 36,
    backgroundColor: '#2A2C2B',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  tagsRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  tag: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
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
  priceBox: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  priceBoxLeft: {
    flex: 1,
  },
  priceBoxSubtitle: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },
  priceBoxTitle: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  priceValue: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  priceBoxRight: {
    alignItems: 'flex-end',
  },
  trackingPill: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  trackingDot: {
    width: 6,
    height: 6,
    backgroundColor: '#000',
    borderRadius: 3,
    marginRight: 6,
  },
  trackingText: {
    color: '#000',
    fontSize: 10,
    fontWeight: '600',
  },
  saveText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: colors.text.secondary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  viewAllText: {
    color: colors.text.secondary,
    fontSize: 12,
  },
  comparisonList: {
    marginBottom: 32,
  },
  comparisonCard: {
    backgroundColor: '#1E201F',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  comparisonIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#2A2C2B',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  comparisonInfo: {
    flex: 1,
  },
  storeName: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  storeDetails: {
    color: colors.text.secondary,
    fontSize: 12,
  },
  comparisonPriceBox: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  storePrice: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  matchedText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  diffText: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  alternativesList: {
    paddingRight: 24,
  },
  altCard: {
    width: 140,
    marginRight: 16,
    backgroundColor: '#1E201F',
    borderRadius: 16,
    padding: 12,
  },
  altImageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#0A0A0A',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  altImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  altSubtitle: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  altPrice: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  altSaveBadge: {
    backgroundColor: 'rgba(133, 206, 170, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  altSaveText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  floatingActions: {
    position: 'absolute',
    bottom: 85, // Above the tab bar
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'transparent',
  },
  circularActionBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#1E201F',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  circularActionText: {
    color: colors.text.primary,
    fontSize: 10,
    marginTop: 4,
    fontWeight: '500',
  },
  buyNowBtn: {
    backgroundColor: colors.primary,
    height: 64,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    marginHorizontal: 16,
    flex: 1, // Optional: Let the buy button stretch slightly if preferred
    maxWidth: 200,
  },
  buyNowText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  fauxTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // including safe area might need dynamic height
    paddingBottom: 16, // safe area adjustment
    backgroundColor: '#1E201F',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: '500',
    marginTop: 4,
  },
});
