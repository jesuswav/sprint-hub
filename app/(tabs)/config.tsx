import React, {useState} from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ConfigScreen() {
  return (
    <ThemedView>
      <ThemedText>Config</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
});
