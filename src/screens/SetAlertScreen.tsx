import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'SetAlert'>;

export const SetAlertScreen: React.FC<Props> = ({ navigation }) => {
  const [price, setPrice] = useState('0.00');
  const [backInStock, setBackInStock] = useState(true);
  const [cheaperListing, setCheaperListing] = useState(false);
  const [priceDrop, setPriceDrop] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Track Product</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Product Info */}
        <View style={styles.productCard}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&q=80' }} 
              style={styles.productImage} 
              resizeMode="contain"
            />
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Vertex Premium Chrono</Text>
            <Text style={styles.currentPriceText}>
              Current Price: <Text style={styles.currentPriceValue}>$1,249.00</Text>
            </Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>NOTIFY ME WHEN PRICE DROPS BELOW</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.currencySymbol}>$</Text>
          <TextInput
            style={styles.priceInput}
            value={price}
            onChangeText={setPrice}
            keyboardType="decimal-pad"
            placeholder="0.00"
            placeholderTextColor={colors.text.secondary}
          />
        </View>
        <Text style={styles.helpText}>We'll alert you instantly across all your connected devices.</Text>

        <View style={styles.togglesContainer}>
          <View style={styles.toggleRow}>
            <View style={styles.toggleInfo}>
              <Text style={styles.toggleTitle}>Notify when back in stock</Text>
              <Text style={styles.toggleSubtitle}>Stay updated on inventory changes</Text>
            </View>
            <Switch
              value={backInStock}
              onValueChange={setBackInStock}
              trackColor={{ false: '#2A2C2B', true: 'rgba(133, 206, 170, 0.5)' }}
              thumbColor={backInStock ? colors.primary : '#A1A5A2'}
            />
          </View>

          <View style={styles.toggleRow}>
            <View style={styles.toggleInfo}>
              <Text style={styles.toggleTitle}>Notify when new cheaper listing appears</Text>
              <Text style={styles.toggleSubtitle}>Monitor all marketplace sellers</Text>
            </View>
            <Switch
              value={cheaperListing}
              onValueChange={setCheaperListing}
              trackColor={{ false: '#2A2C2B', true: 'rgba(133, 206, 170, 0.5)' }}
              thumbColor={cheaperListing ? colors.primary : '#A1A5A2'}
            />
          </View>

          <View style={styles.toggleRow}>
            <View style={styles.toggleInfo}>
              <Text style={styles.toggleTitle}>Notify when Price drops below a target amount</Text>
              <Text style={styles.toggleSubtitle}>Monitor all marketplace sellers</Text>
            </View>
            <Switch
              value={priceDrop}
              onValueChange={setPriceDrop}
              trackColor={{ false: '#2A2C2B', true: 'rgba(133, 206, 170, 0.5)' }}
              thumbColor={priceDrop ? colors.primary : '#A1A5A2'}
            />
          </View>
        </View>

        <Button title="Set Alert" onPress={() => navigation.goBack()} style={styles.submitBtn} />
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
    paddingHorizontal: 24,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#0A0A0A',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  productImage: {
    width: '70%',
    height: '70%',
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  currentPriceText: {
    color: colors.text.secondary,
    fontSize: 12,
  },
  currentPriceValue: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  sectionLabel: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 12,
  },
  inputContainer: {
    backgroundColor: '#2A2C2B',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 80,
    marginBottom: 12,
  },
  currencySymbol: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 12,
  },
  priceInput: {
    flex: 1,
    color: colors.text.primary,
    fontSize: 48,
    fontWeight: 'bold',
    height: '100%',
  },
  helpText: {
    color: colors.text.secondary,
    fontSize: 10,
    marginBottom: 32,
  },
  togglesContainer: {
    backgroundColor: '#1E201F',
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  toggleInfo: {
    flex: 1,
    paddingRight: 16,
  },
  toggleTitle: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  toggleSubtitle: {
    color: colors.text.secondary,
    fontSize: 10,
  },
  submitBtn: {
    marginTop: 'auto',
    marginBottom: 24,
  },
});
