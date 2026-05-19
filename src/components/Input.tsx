import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps, Text } from 'react-native';
import { colors } from '../theme/colors';

interface InputProps extends TextInputProps {
  error?: string;
}

export const Input: React.FC<InputProps> = ({ error, style, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style, error ? styles.inputError : null]}
        placeholderTextColor={colors.text.secondary}
        {...props}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  input: {
    backgroundColor: colors.surface,
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 16,
    color: colors.text.primary,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: '#FF4D4D',
  },
  errorText: {
    color: '#FF4D4D',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
