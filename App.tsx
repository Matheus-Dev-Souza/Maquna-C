import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import {SlotMachine} from './src/SlotMachine';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SlotMachine />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
