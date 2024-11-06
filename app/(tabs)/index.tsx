import React, {useState} from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.HomeScreenContainer}>
      <ThemedText>Holaaaa</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  HomeScreenContainer: {

  }
});
