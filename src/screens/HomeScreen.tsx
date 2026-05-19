import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

const recentSearches = [
  { id: '1', title: 'Premium Chrono', price: '$299.00', discount: '-15%', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80' },
  { id: '2', title: 'Acoustic Pro', price: '$189.50', tag: 'SAFE WORK', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
];

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>PriceHacker</Text>
        </View>

        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            Find the best price{'\n'}
            <Text style={styles.heroTitleAccent}>instantly</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Paste a link or upload a product{'\n'}screenshot to start hacking prices.
          </Text>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Paste Amazon, eBay, or store link..."
              placeholderTextColor={colors.text.secondary}
            />
            <TouchableOpacity 
              style={styles.findButton}
              onPress={() => navigation.navigate('Processing')}
            >
              <Text style={styles.findButtonText}>FIND</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity 
            style={styles.uploadButton} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Upload')}
          >
            <Ionicons name="camera-outline" size={32} color={colors.primary} style={styles.uploadIcon} />
            <Text style={styles.uploadText}>Upload Photo / Screenshot</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recentSection}>
          <View style={styles.recentHeader}>
            <Text style={styles.recentTitle}>Recent Searches</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recentList}>
            {recentSearches.map(item => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.recentCard}
                onPress={() => navigation.navigate('Results')}
              >
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.image }} style={styles.recentImage} />
                  {item.discount && (
                    <View style={styles.badgeDiscount}>
                      <Text style={styles.badgeText}>{item.discount}</Text>
                    </View>
                  )}
                  {item.tag && (
                    <View style={styles.badgeTag}>
                      <Text style={styles.badgeTagText}>{item.tag}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.recentInfo}>
                  <Text style={styles.recentItemTitle} numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.recentItemPrice}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    letterSpacing: -0.5,
  },
  heroSection: {
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 32,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 12,
  },
  heroTitleAccent: {
    color: colors.primary,
  },
  heroSubtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  searchSection: {
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  searchInputContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E201F',
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 6,
    paddingVertical: 6,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    color: colors.text.primary,
    fontSize: 14,
  },
  findButton: {
    backgroundColor: colors.primary,
    height: '100%',
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  findButtonText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 12,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    color: colors.text.secondary,
    paddingHorizontal: 16,
    fontSize: 12,
  },
  uploadButton: {
    backgroundColor: '#1E201F',
    borderRadius: 16,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2C2B',
  },
  uploadIcon: {
    marginBottom: 12,
  },
  uploadText: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  recentSection: {
    paddingLeft: 24,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 24,
    marginBottom: 16,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  viewAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  recentList: {
    paddingRight: 24,
  },
  recentCard: {
    width: 140,
    marginRight: 16,
    backgroundColor: '#1E201F',
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 140,
    width: '100%',
    backgroundColor: '#2A2C2B',
    position: 'relative',
  },
  recentImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  badgeDiscount: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#E55353',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeTag: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    alignItems: 'center',
  },
  badgeTagText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '600',
  },
  recentInfo: {
    padding: 12,
  },
  recentItemTitle: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  recentItemPrice: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
});
