import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';


const SYMBOLS = ['star', 'heart', 'bell', 'diamond', 'apple'];

const getRandomSymbol = () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

export const SlotMachine: React.FC = () => {
  const [symbols, setSymbols] = useState<string[]>([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);

  const spin = () => {
    setSymbols([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.slotContainer}>
        {symbols.map((symbol, index) => (
          <FontAwesome key={index} name={symbol as any} size={60} color="black" />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={spin}>
        <Text style={styles.buttonText}>Spin</Text>
      </TouchableOpacity>
    </View>
  );
};

