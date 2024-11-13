import React, { useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useRouter } from 'expo-router'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

// componentes de la aplicación

export default function ProyectPage() {
    
  return (
    <ThemedView style={styles.HomeScreenContainer}>
      <View style={styles.titleContainer}>
        <ThemedText type='title'>Proyect Page</ThemedText>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 22,
  },
  titleContainer: {
    margin: 6,
    marginBottom: 22,
  },
  proyectContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
})
