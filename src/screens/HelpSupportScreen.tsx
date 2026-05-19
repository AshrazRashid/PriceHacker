import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons, Feather } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'HelpSupport'>;

const faqData = [
  {
    id: '1',
    question: 'Is this the cheapest place to buy this product?',
    answer: 'We compare multiple stores to show you the lowest available price for this product.',
  },
  {
    id: '2',
    question: 'Am i overpaying?',
    answer: 'We use historical data and market analysis to determine if the current price is fair or inflated.',
  },
  {
    id: '3',
    question: 'Is there a similer cheaper option?',
    answer: 'Yes, check our Alternatives section to find products with similar specs at a lower price point.',
  },
  {
    id: '4',
    question: 'Should i buy now or wait for a better price?',
    answer: 'Based on price tracking, we will recommend whether to buy now or wait for a potential drop.',
  },
];

export const HelpSupportScreen: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'FAQ' | 'Contact Us'>('FAQ');
  const [activeFilter, setActiveFilter] = useState('General');
  const [expandedId, setExpandedId] = useState<string | null>('1');
  const [contactExpandedId, setContactExpandedId] = useState<string | null>('customer_service');

  const renderFAQ = () => (
    <>
      <View style={styles.filtersRow}>
        {['General', 'Comparison', 'saved', 'Alerts'].map((filter) => (
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
      <View style={styles.faqList}>
        {faqData.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <View key={item.id} style={styles.faqCard}>
              <TouchableOpacity 
                style={styles.faqQuestionRow} 
                onPress={() => setExpandedId(isExpanded ? null : item.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.faqQuestion}>{item.question}</Text>
                <Feather 
                  name={isExpanded ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color={colors.text.secondary} 
                />
              </TouchableOpacity>
              {isExpanded && (
                <View style={styles.faqAnswerContainer}>
                  <Text style={styles.faqAnswer}>{item.answer}</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </>
  );

  const renderContactUs = () => {
    return (
      <View style={styles.faqList}>
        {/* Customer Service */}
        <View style={styles.faqCard}>
          <TouchableOpacity 
            style={styles.faqQuestionRow} 
            onPress={() => setContactExpandedId(contactExpandedId === 'customer_service' ? null : 'customer_service')}
            activeOpacity={0.7}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="headphones" size={16} color={colors.primary} style={{ marginRight: 8 }} />
              <Text style={[styles.faqQuestion, { color: colors.text.primary }]}>Customer Service</Text>
            </View>
            <Feather 
              name={contactExpandedId === 'customer_service' ? "chevron-up" : "chevron-down"} 
              size={20} 
              color={colors.text.secondary} 
            />
          </TouchableOpacity>
          {contactExpandedId === 'customer_service' && (
            <View style={styles.faqAnswerContainer}>
              <View style={styles.phoneRow}>
                <View style={styles.phoneDot} />
                <Text style={styles.phoneText}>+966(480) 555-0103</Text>
                <Feather name="phone" size={16} color={colors.primary} style={{ marginLeft: 'auto' }} />
              </View>
              <View style={styles.phoneRow}>
                <View style={styles.phoneDot} />
                <Text style={styles.phoneText}>+966(480) 555-0103</Text>
                <Feather name="phone" size={16} color={colors.primary} style={{ marginLeft: 'auto' }} />
              </View>
            </View>
          )}
        </View>

        {/* Email */}
        <View style={styles.faqCard}>
          <TouchableOpacity 
            style={styles.faqQuestionRow} 
            onPress={() => setContactExpandedId(contactExpandedId === 'email' ? null : 'email')}
            activeOpacity={0.7}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="mail" size={16} color={colors.text.secondary} style={{ marginRight: 8 }} />
              <Text style={styles.faqQuestion}>Email</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Whatsapp */}
        <View style={styles.faqCard}>
          <TouchableOpacity 
            style={styles.faqQuestionRow} 
            onPress={() => setContactExpandedId(contactExpandedId === 'whatsapp' ? null : 'whatsapp')}
            activeOpacity={0.7}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="logo-whatsapp" size={16} color={colors.text.secondary} style={{ marginRight: 8 }} />
              <Text style={styles.faqQuestion}>Whatsapp</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
          <Text style={styles.headerTitle}>Help center & Support</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={16} color={colors.text.secondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={colors.text.secondary}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.tabsRow}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'FAQ' && styles.tabActive]}
          onPress={() => setActiveTab('FAQ')}
        >
          <Text style={[styles.tabText, activeTab === 'FAQ' && styles.tabTextActive]}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Contact Us' && styles.tabActive]}
          onPress={() => setActiveTab('Contact Us')}
        >
          <Text style={[styles.tabText, activeTab === 'Contact Us' && styles.tabTextActive]}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {activeTab === 'FAQ' ? renderFAQ() : renderContactUs()}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E201F',
    borderRadius: 12,
    marginHorizontal: 24,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    color: colors.text.primary,
    fontSize: 14,
    marginLeft: 12,
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 16,
  },
  tab: {
    flex: 1,
    backgroundColor: '#1E201F',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    color: colors.text.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#000',
  },
  filtersRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  filterPill: {
    backgroundColor: '#1E201F',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  filterPillActive: {
    backgroundColor: 'rgba(133, 206, 170, 0.1)',
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: 15, // adjust for border
    paddingVertical: 7,
  },
  filterText: {
    color: colors.text.secondary,
    fontSize: 12,
    fontWeight: '500',
  },
  filterTextActive: {
    color: colors.primary,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  faqList: {
    gap: 12,
  },
  faqCard: {
    backgroundColor: '#161817',
    borderRadius: 12,
    overflow: 'hidden',
  },
  faqQuestionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  faqQuestion: {
    color: colors.text.primary,
    fontSize: 12,
    fontWeight: '500',
    flex: 1,
    paddingRight: 16,
  },
  faqAnswerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  faqAnswer: {
    color: colors.text.secondary,
    fontSize: 12,
    lineHeight: 20,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 8,
  },
  phoneDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.primary,
    marginRight: 12,
  },
  phoneText: {
    color: colors.text.secondary,
    fontSize: 12,
  },
});
