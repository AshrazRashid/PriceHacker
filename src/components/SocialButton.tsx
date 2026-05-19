import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

interface SocialButtonProps {
  title: string;
  onPress: () => void;
  icon: React.ReactNode;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});
