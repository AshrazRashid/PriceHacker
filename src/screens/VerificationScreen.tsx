import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { FontAwesome } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Verification'>;

export const VerificationScreen: React.FC<Props> = ({ navigation, route }) => {
  const [code, setCode] = useState('');
  const email = route.params?.email || 'test@gmail.com';

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setCode(prev => prev.slice(0, -1));
    } else if (code.length < 4) {
      const newCode = code + key;
      setCode(newCode);
      // Auto verify when 4 digits are entered
      if (newCode.length === 4) {
        navigation.navigate('MainTabs');
      }
    }
  };

  const renderCodeBoxes = () => {
    return (
      <View style={styles.codeContainer}>
        {[0, 1, 2, 3].map((index) => (
          <View key={index} style={[styles.codeBox, code.length === index && styles.codeBoxActive]}>
            <Text style={styles.codeText}>{code[index] || ''}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderKeypad = () => {
    const keys = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['', '0', 'backspace']
    ];

    return (
      <View style={styles.keypadContainer}>
        {keys.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.keypadRow}>
            {row.map((key, keyIndex) => (
              <TouchableOpacity
                key={keyIndex}
                style={styles.keypadKey}
                onPress={() => key && handleKeyPress(key)}
                disabled={!key}
              >
                {key === 'backspace' ? (
                  <View style={styles.backspaceKey}>
                    <FontAwesome name="long-arrow-left" size={20} color={colors.text.primary} />
                  </View>
                ) : (
                  <Text style={styles.keypadText}>{key}</Text>
                )}
                {key && key !== '0' && key !== 'backspace' && (
                  <Text style={styles.keypadLetters}>
                    {key === '1' ? ' ' : 
                     key === '2' ? 'ABC' : 
                     key === '3' ? 'DEF' : 
                     key === '4' ? 'GHI' : 
                     key === '5' ? 'JKL' : 
                     key === '6' ? 'MNO' : 
                     key === '7' ? 'PQRS' : 
                     key === '8' ? 'TUV' : 'WXYZ'}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <FontAwesome name="arrow-left" size={20} color={colors.text.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Email Verification</Text>
        <Text style={styles.subtitle}>
          We sent a code to your email{'\n'}
          <Text style={styles.emailText}>{email}</Text>{' '}
          <Text style={styles.changeText} onPress={() => navigation.goBack()}>Change</Text>
        </Text>

        {renderCodeBoxes()}

        <Text style={styles.resendText}>
          Don't receive your code? <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </View>

      {renderKeypad()}
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
    paddingBottom: 8,
  },
  backBtn: {
    padding: 8,
    marginLeft: -8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  emailText: {
    color: colors.text.primary,
  },
  changeText: {
    color: colors.text.link,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  codeBox: {
    width: 56,
    height: 64,
    backgroundColor: colors.surface,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  codeBoxActive: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  codeText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text.primary,
  },
  resendText: {
    color: colors.text.secondary,
    fontSize: 14,
  },
  resendLink: {
    color: colors.text.link,
  },
  keypadContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    paddingTop: 16,
    backgroundColor: '#0F0F0F',
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  keypadKey: {
    width: 80,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadText: {
    fontSize: 24,
    color: colors.text.primary,
    fontWeight: '500',
  },
  keypadLetters: {
    fontSize: 10,
    color: colors.text.secondary,
    marginTop: 2,
    letterSpacing: 1,
  },
  backspaceKey: {
    width: 44,
    height: 32,
    backgroundColor: colors.surface,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
